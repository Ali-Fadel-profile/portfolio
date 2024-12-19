import { useState } from "react";
import { FaLinkedin, FaTelegram, FaGithub } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = import.meta.env.VITE_EMAILJS_SERCICEID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATEID;
    const userID = import.meta.env.VITE_EMAILJS_USERID;

    setLoading(true);
    setError(null);
    emailjs
      .send(serviceID, templateID, formData, userID)
      .then(() => {
        setIsSubmitted(true);
        setLoading(false);
      })
      .catch(() => {
        setError("Something went wrong.");
        setLoading(false);
      });
  };

  return (
    <div
      className="container mx-auto flex flex-col gap-10 px-4 py-8 lg:flex-row"
      id="contact"
    >
      <div className="lg:w-1/2">
        <h2 className="mb-6 text-[44px] lg:text-heading-m">Let's Contact</h2>
        <p className="text-body-m">
          Feel free to reach out to me any time. <br /> I prefer to talk over
          email.
        </p>
        <p className="my-4 text-body-m">
          <a
            target="_blank"
            href="mailto:alifathifadel@gmail.com"
            className="underline"
          >
            alifathifadel@gmail.com
          </a>
        </p>
        <ul className="flex gap-4">
          <li>
            <a
              href="https://www.linkedin.com/in/ali-fadel-profile/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Ali-Fadel-profile?tab=repositories"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="https://t.me/Ali_fathi_f">
              <FaTelegram />
            </a>
          </li>
        </ul>
      </div>
      {!isSubmitted ? (
        <form
          onSubmit={handleSubmit}
          className={`relative space-y-4 lg:w-1/2 ${loading ? "pointer-events-none opacity-50" : ""}`}
        >
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-main border-t-transparent"></div>
            </div>
          )}
          <div>
            <label htmlFor="name" className="mb-1 block text-body-m">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="bg-light-gray w-full rounded px-3 py-2 dark:bg-very-dark-gray"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-body-m">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="bg-light-gray w-full rounded px-3 py-2 dark:bg-very-dark-gray"
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label htmlFor="subject" className="mb-1 block text-body-m">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="bg-light-gray w-full rounded px-3 py-2 dark:bg-very-dark-gray"
              placeholder="Your Subject"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-body-m">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="bg-light-gray w-full rounded px-3 py-2 dark:bg-very-dark-gray"
              rows="5"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-soft-blue hover:bg-soft-blue-hover rounded-3xl px-4 py-2 text-body-m text-white transition-colors duration-300 dark:bg-main dark:text-black dark:hover:bg-main-hover"
          >
            Send Message
          </button>
        </form>
      ) : error ? (
        <p className="text-red">
          {error} mail me instead{" "}
          <a
            href="mailto:alifathifadel@gmail.com"
            target="_blank"
            className="text-soft-blue hover:text-soft-blue-hoverdark:text-main underline dark:hover:text-main-hover"
          >
            alifathifadel@gmail.com
          </a>{" "}
        </p>
      ) : (
        <p className={`text-soft-blue text-body-l dark:text-main`}>
          Thank you for reaching out! I'll get back to you soon.
        </p>
      )}
    </div>
  );
}

export default Contact;
