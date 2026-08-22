<?php
// Enable error reporting for debugging (disable in production)
error_reporting(E_ALL);
ini_set('display_errors', 0);

// Set JSON header
header('Content-Type: application/json');

// SMTP Configuration
define('SMTP_HOST', 'smtp.stackmail.com');
define('SMTP_PORT', 587); // or 465 for SSL
define('SMTP_USERNAME', 'lionsservicesgabon@lionssg.net');
define('SMTP_PASSWORD', '4jW0pU@&mjtV');
define('SMTP_FROM_EMAIL', 'lionsservicesgabon@lionssg.net');
define('SMTP_FROM_NAME', 'Lions Services Gabon - Formulaire Contact');
define('RECIPIENT_EMAIL', 'lionsservicesgabon@lionssg.net');

// Function to send email via SMTP
function sendEmail($to, $subject, $message, $fromEmail, $fromName) {
    // Email headers
    $headers = array();
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=utf-8';
    $headers[] = 'From: ' . $fromName . ' <' . $fromEmail . '>';
    $headers[] = 'Reply-To: ' . $fromEmail;
    $headers[] = 'X-Mailer: PHP/' . phpversion();
    
    // Configure php.ini settings for SMTP
    ini_set('SMTP', SMTP_HOST);
    ini_set('smtp_port', SMTP_PORT);
    ini_set('sendmail_from', $fromEmail);
    
    // Try to send email
    return mail($to, $subject, $message, implode("\r\n", $headers));
}

// Check if form was submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    
    // Sanitize and validate input
    $nom = isset($_POST['nom']) ? trim(htmlspecialchars($_POST['nom'])) : '';
    $prenom = isset($_POST['prenom']) ? trim(htmlspecialchars($_POST['prenom'])) : '';
    $societe = isset($_POST['societe']) ? trim(htmlspecialchars($_POST['societe'])) : 'Non renseignée';
    $telephone = isset($_POST['telephone']) ? trim(htmlspecialchars($_POST['telephone'])) : 'Non renseigné';
    $email = isset($_POST['email']) ? trim(htmlspecialchars($_POST['email'])) : '';
    $type_demande = isset($_POST['type_demande']) ? trim(htmlspecialchars($_POST['type_demande'])) : '';
    $message = isset($_POST['message']) ? trim(htmlspecialchars($_POST['message'])) : '';
    
    // Validation
    $errors = array();
    
    if (empty($nom)) {
        $errors[] = 'Le nom est requis.';
    }
    
    if (empty($prenom)) {
        $errors[] = 'Le prénom est requis.';
    }
    
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = 'Une adresse e-mail valide est requise.';
    }
    
    if (empty($type_demande)) {
        $errors[] = 'Le type de demande est requis.';
    }
    
    if (empty($message)) {
        $errors[] = 'Le message est requis.';
    }
    
    // If validation errors, return error
    if (!empty($errors)) {
        echo json_encode(array(
            'success' => false,
            'message' => implode(' ', $errors)
        ));
        exit;
    }
    
    // Prepare email content
    $emailSubject = 'Nouvelle demande de contact - Lions Services Gabon';
    
    $emailBody = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="utf-8">
        <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: #001F3F; color: white; padding: 20px; text-align: center; }
            .content { background: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #0047AB; margin-bottom: 5px; display: block; }
            .value { background: white; padding: 10px; border-left: 3px solid #D4AF37; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>LIONS SERVICES GABON</h1>
                <p>Nouvelle demande de contact</p>
            </div>
            
            <div class="content">
                <div class="field">
                    <span class="label">Type de demande :</span>
                    <div class="value">' . $type_demande . '</div>
                </div>
                
                <div class="field">
                    <span class="label">Nom et Prénom :</span>
                    <div class="value">' . $prenom . ' ' . $nom . '</div>
                </div>
                
                <div class="field">
                    <span class="label">Société :</span>
                    <div class="value">' . $societe . '</div>
                </div>
                
                <div class="field">
                    <span class="label">Téléphone :</span>
                    <div class="value">' . $telephone . '</div>
                </div>
                
                <div class="field">
                    <span class="label">E-mail :</span>
                    <div class="value"><a href="mailto:' . $email . '">' . $email . '</a></div>
                </div>
                
                <div class="field">
                    <span class="label">Message :</span>
                    <div class="value">' . nl2br($message) . '</div>
                </div>
            </div>
            
            <div class="footer">
                <p>Ce message a été envoyé depuis le formulaire de contact du site Lions Services Gabon</p>
                <p>Date : ' . date('d/m/Y à H:i:s') . '</p>
            </div>
        </div>
    </body>
    </html>
    ';
    
    // Try to send email
    $emailSent = sendEmail(
        RECIPIENT_EMAIL,
        $emailSubject,
        $emailBody,
        SMTP_FROM_EMAIL,
        SMTP_FROM_NAME
    );
    
    if ($emailSent) {
        echo json_encode(array(
            'success' => true,
            'message' => 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt.'
        ));
    } else {
        echo json_encode(array(
            'success' => false,
            'message' => 'Erreur lors de l\'envoi du message. Veuillez nous contacter directement par téléphone ou email.'
        ));
    }
    
} else {
    // Not a POST request
    echo json_encode(array(
        'success' => false,
        'message' => 'Méthode non autorisée.'
    ));
}
?>