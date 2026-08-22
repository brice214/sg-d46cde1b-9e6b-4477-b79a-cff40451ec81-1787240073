# LIONS SERVICES GABON - Landing Page HTML/CSS/JS

## Description
Landing page professionnelle pour Lions Services Gabon - Expert en inspection, contrôle, certification et formation pour les secteurs Oil & Gas, Marine, Bunkering, Mining, Chemical, Agriculture et Import/Export au Gabon.

## Technologies
- HTML5
- CSS3 (avec variables CSS)
- JavaScript vanilla
- PHP (pour formulaire de contact)

## Structure des fichiers
```
html-version/
├── index.html          # Page principale
├── css/
│   └── style.css       # Tous les styles
├── js/
│   └── script.js       # Navigation, menu mobile, formulaire
├── images/             # Toutes les images
│   ├── logo.jpg
│   ├── hero-refinery.jpg
│   ├── valve-operation.jpg
│   ├── bunkering.jpg
│   └── training.jpg
├── contact.php         # Script d'envoi email SMTP
├── favicon.ico
└── README.md
```

## Installation sur serveur mutualisé

### 1. Télécharger tous les fichiers
Transférez l'intégralité du dossier `html-version/` sur votre serveur via FTP (FileZilla, Cyberduck, etc.)

### 2. Configuration PHP
Le fichier `contact.php` est déjà configuré avec :
- **SMTP Host**: smtp.stackmail.com
- **Email**: lionsservicesgabon@lionssg.net
- **Port**: 587 (ou 465 pour SSL)

⚠️ **Important** : Vérifiez que votre hébergeur autorise l'envoi d'emails via SMTP.

### 3. Permissions fichiers
Assurez-vous que le fichier `contact.php` a les bonnes permissions :
```bash
chmod 644 contact.php
```

### 4. Test du formulaire
1. Ouvrez la page dans votre navigateur
2. Remplissez le formulaire de contact
3. Vérifiez la réception à : lionsservicesgabon@lionssg.net

## Configuration SMTP alternative

Si votre hébergeur bloque l'envoi SMTP par défaut, vous avez 2 options :

### Option A : Utiliser PHPMailer (recommandé)
```bash
# Télécharger PHPMailer
wget https://github.com/PHPMailer/PHPMailer/archive/refs/heads/master.zip
unzip master.zip
```

Puis modifier `contact.php` pour utiliser PHPMailer.

### Option B : Utiliser la fonction mail() native
Remplacer la fonction `sendEmail()` dans `contact.php` par :
```php
function sendEmail($to, $subject, $message, $fromEmail, $fromName) {
    $headers = 'From: ' . $fromName . ' <' . $fromEmail . '>' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    return mail($to, $subject, $message, $headers);
}
```

## Fonctionnalités

✅ Design responsive (mobile, tablette, desktop)
✅ Navigation sticky avec scroll smooth
✅ Menu hamburger mobile
✅ Formulaire de contact avec validation
✅ Envoi d'emails via SMTP
✅ Animations au scroll
✅ SEO optimisé (meta tags, structured data)
✅ Accessibilité (WCAG AA)

## Support navigateurs

- Chrome/Edge (dernières versions)
- Firefox (dernières versions)
- Safari (dernières versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Maintenance

### Modifier les couleurs
Éditez les variables CSS dans `css/style.css` :
```css
:root {
    --primary: hsl(217, 100%, 34%);    /* Bleu principal */
    --navy: hsl(210, 100%, 12%);       /* Bleu marine */
    --gold: hsl(43, 65%, 53%);         /* Doré */
}
```

### Modifier les textes
Tous les textes sont directement dans `index.html` - cherchez la section concernée et modifiez.

### Ajouter/Modifier images
Placez vos nouvelles images dans le dossier `images/` et mettez à jour les chemins dans `index.html`.

## Contact

Pour toute question technique :
- Email : lionsservicesgabon@lionssg.net
- Téléphone : +241 66 92 80 17 / +241 06 18 25 14

## Licence

© 2026 LIONS SERVICES GABON. Tous droits réservés.