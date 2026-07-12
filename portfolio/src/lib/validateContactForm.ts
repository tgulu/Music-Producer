const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name) errors.name = "Full Name Can't Be Blank";
  if (!values.subject) errors.subject = "Subject Can't Be Blank";
  if (!values.message) errors.message = "Message Can't Be Blank";

  if (!values.email) {
    errors.email = "Email Address Can't Be Blank";
  } else if (!EMAIL_REGEX.test(values.email)) {
    errors.email = "Enter a valid Email Address";
  }

  return errors;
}
