import { useState, type ChangeEvent, type FormEvent } from "react";
import Swal from "sweetalert2";
import {
  validateContactForm,
  type ContactFormValues,
  type ContactFormErrors,
} from "../lib/validateContactForm";
import { sendEmail } from "../lib/sendEmail";
import artist4 from "../assets/img/studiosession/artist4.webp";

const initialValues: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const ContactForm = () => {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateContactForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setIsSending(true);

    try {
      const success = await sendEmail(values);

      if (success) {
        Swal.fire({
          title: "Sent Successfully!",
          text: "Thank You For Reaching Out",
          icon: "success",
        });

        setValues(initialValues);
      }
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div
      className="relative flex min-h-screen w-full flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-20"
      style={{ backgroundImage: `url(${artist4})` }}
    >
      <div className="relative z-10 flex w-full flex-col items-center">
        <h1 className="mb-10 text-4xl font-light text-white">
          Contact Details
        </h1>

        <form
          onSubmit={handleSubmit}
          className="flex w-full max-w-90 flex-col gap-5 tablet:max-w-xl"
        >
          <div className="flex flex-col gap-5 tablet:flex-row bg-black/40">
            <div className="flex-1">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                autoComplete="off"
                value={values.name}
                onChange={handleChange}
                className={`w-full border-b bg-transparent px-2 py-2 text-2xl text-white placeholder:text-white outline-none ${
                  errors.name ? "border-red-600" : "border-white"
                }`}
              />

              {errors.name && (
                <div className="mt-1 text-red-500">{errors.name}</div>
              )}
            </div>
          </div>

          <div className="flex-1  bg-black/40">
            <input
              type="text"
              name="email"
              placeholder="Email Address"
              autoComplete="off"
              value={values.email}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-2 text-2xl text-white placeholder:text-white outline-none ${
                errors.email ? "border-red-600" : "border-white"
              }`}
            />

            {errors.email && (
              <div className="mt-1 text-red-500">{errors.email}</div>
            )}
          </div>

          <div className=" bg-black/40">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              autoComplete="off"
              value={values.subject}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-2 text-2xl text-white placeholder:text-white outline-none ${
                errors.subject ? "border-red-600" : "border-white"
              }`}
            />

            {errors.subject && (
              <div className="mt-1 text-red-500">{errors.subject}</div>
            )}
          </div>

          <div className=" bg-black/40">
            <textarea
              name="message"
              placeholder="Your Message"
              rows={10}
              autoComplete="off"
              value={values.message}
              onChange={handleChange}
              className={`w-full border-b bg-transparent px-2 py-2 text-2xl text-white placeholder:text-white outline-none ${
                errors.message ? "border-red-600" : "border-white"
              }`}
            />

            {errors.message && (
              <div className="mt-1 text-red-500">{errors.message}</div>
            )}
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="mt-2 cursor-pointer border bg-black/10 border-white px-6 py-3 text-white transition-shadow duration-700 hover:shadow-[0_0_20px_rgba(255,255,255,0.4)] disabled:opacity-50"
          >
            {isSending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
