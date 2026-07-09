"use client";

import React, { ChangeEvent, FormEvent, useRef, useState, useEffect } from "react";
import CustomeText from "./ui/CustomeText";
import Link from "next/link";
import ClientOnly from "./ui/ClientOnly";
import emailjs from "@emailjs/browser";

const Footer = () => {
  const [isSending, setIsSending] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    subject: "",
    message: "",
  });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSending(true);
    setStatusMessage("");

    try {
      const response = await emailjs.send(
        "service_ugilufa",
        "template_lezac9x",
        {
          from_name: formData.from_name,
          from_email: formData.from_email,
          subject: formData.subject || "No Subject",
          message: formData.message,
          to_email: "khumalosiya2001@gmail.com",
        }
      );

      console.log("EmailJS Success:", response);
      setStatusMessage("Your message has been sent successfully!");
      setFormData({ from_name: "", from_email: "", subject: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error Details:", error);
      console.error("Error Text:", error?.text);
      console.error("Error Status:", error?.status);
      setStatusMessage("Something went wrong while sending your message. Please try again later.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <footer className="w-full bg-white flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-[71px] gap-10">
      <div className="w-full max-w-4xl text-center flex flex-col items-center gap-4">
        <CustomeText
          title="Contact Me"
          className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[64px] text-[#344054]"
        />
      </div>

      <div className="w-full max-w-6xl grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-[32px] border border-[#E4E7EC] bg-[#F9FAFB] p-6 md:p-8 shadow-sm">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Name*"
                required
                className="w-full rounded-full border border-[#D0D5DD] bg-white px-4 py-3 text-base text-[#1D2939] outline-none placeholder:text-[#667085]"
              />
              <input
                type="email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Email*"
                required
                className="w-full rounded-full border border-[#D0D5DD] bg-white px-4 py-3 text-base text-[#1D2939] outline-none placeholder:text-[#667085]"
              />
            </div>

            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full rounded-full border border-[#D0D5DD] bg-white px-4 py-3 text-base text-[#1D2939] outline-none placeholder:text-[#667085]"
            />

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Message"
              rows={6}
              required
              className="w-full rounded-[24px] border border-[#D0D5DD] bg-white px-4 py-3 text-base text-[#1D2939] outline-none placeholder:text-[#667085]"
            />

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={isSending}
                className="w-full sm:w-fit rounded-full bg-[#7b7d7a] px-8 py-3 text-lg font-semibold text-white transition duration-300 hover:bg-[#5f6160] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Sending..." : "Send"}
              </button>

              {statusMessage ? (
                <p className={`text-sm ${statusMessage.includes("success") ? "text-green-600" : "text-red-600"}`}>
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>

        <div className="rounded-[32px] border border-[#E4E7EC] bg-white p-6 md:p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b7d7a]">Contact Me</p>
              <h3 className="mt-2 text-2xl font-semibold text-[#344054]">Khumalo Katleho</h3>
              <p className="text-[#667085]">Computer System Engineer</p>
            </div>

            <div className="space-y-4 text-[#344054]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b7d7a]">Phone</p>
                <a href="tel:+27641622166" className="mt-1 inline-block hover:text-[#7b7d7a]">+27 64 162 2166</a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b7d7a]">Email</p>
                <a href="mailto:khumalosiya2001@gmail.com" className="mt-1 inline-block hover:text-[#7b7d7a]">khumalosiya2001@gmail.com</a>
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b7d7a]">GitHub</p>
                <a href="https://github.com/KhumaloKat" target="_blank" rel="noreferrer" className="mt-1 inline-block hover:text-[#7b7d7a]">KhumaloKat</a>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="https://www.linkedin.com/in/khumalo-kat/" target="_blank" rel="noreferrer" className="rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-medium text-[#344054] transition hover:border-[#7b7d7a] hover:text-[#7b7d7a]">LinkedIn</a>
              <a href="https://www.instagram.com/khumalo_kat/" target="_blank" rel="noreferrer" className="rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-medium text-[#344054] transition hover:border-[#7b7d7a] hover:text-[#7b7d7a]">Instagram</a>
              <a href="https://www.facebook.com/khumalo.kat/" target="_blank" rel="noreferrer" className="rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-medium text-[#344054] transition hover:border-[#7b7d7a] hover:text-[#7b7d7a]">Facebook</a>
              <a href="https://x.com/khumalo_kat" target="_blank" rel="noreferrer" className="rounded-full border border-[#D0D5DD] px-4 py-2 text-sm font-medium text-[#344054] transition hover:border-[#7b7d7a] hover:text-[#7b7d7a]">X</a>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full max-w-6xl border-t border-[#E4E7EC] pt-6 text-center text-sm text-[#667085]">
        <p>© copyright KhumaloKat design | 2025</p>
      </div>
    </footer>
  );
};

export default Footer;
