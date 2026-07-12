import type { ContactFormValues } from "./validateContactForm";

export async function sendEmail(values: ContactFormValues): Promise<boolean> {
  const bodyMessage = `Full Name: ${values.name} <br> Email: ${values.email}<br> Message: ${values.message}`;

  const result = await window.Email.send({
    SecureToken: import.meta.env.VITE_SMTP_TOKEN,
    To: "crnaudio@gmail.com",
    From: "crnaudio@gmail.com",
    Subject: values.subject,
    Body: bodyMessage,
  });

  return result === "OK";
}
