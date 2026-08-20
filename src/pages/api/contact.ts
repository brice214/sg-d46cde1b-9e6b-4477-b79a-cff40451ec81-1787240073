import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, company, phone, email, requestType, message } = req.body;

  if (!firstName || !lastName || !company || !phone || !email || !requestType || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    // Configure SMTP transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.stackmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // Email content
    const emailContent = `
Nouvelle demande de contact depuis le site web Lions Services Gabon

Informations du contact :
- Nom : ${lastName}
- Prénom : ${firstName}
- Société : ${company}
- Téléphone : ${phone}
- Email : ${email}
- Type de demande : ${requestType}

Message :
${message}
    `;

    // Send email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "lionsservicesgabon@lionssg.net",
      subject: `Nouvelle demande de contact - ${requestType}`,
      text: emailContent,
      replyTo: email,
    });

    return res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Email sending error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}