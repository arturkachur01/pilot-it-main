import React, { useState } from "react";
import AOS from "aos";

const ContactForm: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  return (
    <div
      data-aos="fade-up"
      data-aos-easing="ease-in-sine"
      data-aos-delay="200"
      id="contact-section"
      className="mx-4 mt-12 flex border-spacing-2 flex-col rounded-3xl bg-[#a58fe6] px-4 py-6 sm:mx-28 sm:flex-row sm:px-36"
    >
      <div className="flex w-full flex-col items-center justify-start sm:w-1/2 sm:items-start">
        <h2 className="text-start text-4xl font-bold text-zinc-100">
          Contact us by booking a call or filling out the form
        </h2>
        <a
          href="mailto:artem@pilot-it.com"
          className="mt-10 pb-2 text-left text-xl font-medium text-zinc-100"
        >
          artem@pilot-it.com
        </a>
        <p className="pb-8 text-left text-xl font-medium text-zinc-100">
          +380951608988
        </p>
      </div>
      <form
        className="flex w-full flex-col justify-center sm:w-1/2"
        action="https://formspree.io/f/xzblozgd"
        method="POST"
      >
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-zinc-100"
            htmlFor="name"
          >
            Name
          </label>
          <input
            required
            name="name"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-zinc-700 shadow focus:border-[#8053ff] focus:outline-none"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-zinc-100"
            htmlFor="email"
          >
            Email
          </label>
          <input
            required
            name="email"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-zinc-700 shadow focus:border-[#8053ff] focus:outline-none"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-zinc-100"
            htmlFor="service"
          >
            Type of service interested
          </label>
          <select
            required
            name="service"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-zinc-700 shadow focus:border-[#8053ff] focus:outline-none"
            id="service"
          >
            <option value="">Select a service</option>
            <option>Fundraising</option>
            <option>AI Consulting + IT Outsourcing</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-lg font-bold text-zinc-100"
            htmlFor="comments"
          >
            Add comments
          </label>
          <textarea
            name="comments"
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-3 leading-tight text-zinc-700 shadow focus:border-[#8053ff] focus:outline-none"
            id="comments"
            placeholder="Your comments"
          />
        </div>
        <div className="mt-6 flex flex-col items-center justify-center space-y-4 sm:flex-row sm:items-end sm:space-x-6">
          <button
            className="focus:shadow-outline h-14 w-full rounded-lg bg-[#8053ff] px-6 py-2 text-xl font-medium leading-9 text-white hover:bg-[#6a46e0] focus:outline-none sm:w-52"
            type="submit"
          >
            Submit
          </button>
          <a
            href="https://calendly.com/arturkachur/30min"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="focus:shadow-outline h-14 w-full rounded-lg bg-[#8053ff] px-6 py-2 text-xl font-medium leading-9 text-white hover:bg-[#6a46e0] focus:outline-none sm:w-52"
            >
              Book a Call
            </button>
          </a>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
