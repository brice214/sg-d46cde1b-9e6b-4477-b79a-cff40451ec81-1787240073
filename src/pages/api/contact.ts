import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, company, phone, email, requestType, message } = req.body;

  if (!firstName || !lastName || !company || !phone || !email || !requestType || !message) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    console.log("Contact form submission:", {
      firstName,
      lastName,
      company,
      phone,
      email,
      requestType,
      message,
      timestamp: new Date().toISOString(),
    });

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}