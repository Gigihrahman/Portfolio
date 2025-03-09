"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Instagram, Linkedin, Facebook, Send, Github } from "lucide-react";

// Define types for our component
interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
  hoverColor: string;
}

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormStatus {
  submitted: boolean;
  success: boolean;
  message: string;
}

const ContactMe: React.FC = () => {
  // Create refs for different sections
  const titleRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState<FormStatus>({
    submitted: false,
    success: false,
    message: "",
  });

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });

    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: "",
      });
    }, 5000);
  };

  // Check if elements are in view
  const titleInView = useInView(titleRef, { once: true, amount: 0.5 });
  const descInView = useInView(descRef, { once: true, amount: 0.5 });
  const iconsInView = useInView(iconsRef, { once: true, amount: 0.3 });
  const emailInView = useInView(emailRef, { once: true, amount: 0.5 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });

  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/gigihrahmandita/",
      icon: <Instagram size={24} />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/gigih-rahmandita-hatta-nugraha-464591272/",
      icon: <Linkedin size={24} />,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
    {
      name: "Github",
      url: "https://github.com/Gigihrahman",
      icon: <Github size={24} />,
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-900",
    },
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <motion.div
            ref={titleRef}
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-600 font-medium">GET IN TOUCH</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">
              Contact Me
            </h2>
          </motion.div>

          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 20 }}
            animate={descInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-gray-600 mb-10 max-w-2xl mx-auto"
          >
            Feel free to reach out to me on social media or through the contact
            form below. I'm always open to discussing new projects, creative
            ideas, or opportunities to be part of your vision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 mt-10">
          {/* Contact Form */}
          <motion.div
            ref={formRef}
            initial={{ opacity: 0, x: -30 }}
            animate={formInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-6">Send me a message</h3>

            {formStatus.submitted && formStatus.success && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
                {formStatus.message}
              </div>
            )}

            <form onSubmit={handleSubmit} id="contact-form">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="subject"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} className="mr-2" />
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Social Links Side */}
          <div>
            <motion.div
              ref={iconsRef}
              className="flex flex-wrap gap-6 justify-center md:justify-start"
              initial="hidden"
              animate={iconsInView ? "visible" : "hidden"}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.5,
                      },
                    },
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`flex flex-col items-center p-6 rounded-xl ${social.color} ${social.hoverColor} text-white shadow-lg transition-all duration-300 hover:shadow-xl`}
                  >
                    <div className="mb-3">{social.icon}</div>
                    <span className="font-medium">{social.name}</span>
                    <div className="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            <motion.div
              ref={emailRef}
              initial={{ opacity: 0, y: 20 }}
              animate={
                emailInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
              }
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 md:mt-12 flex justify-center md:block"
            >
              <div>
                <p className="text-gray-500">
                  Prefer email? Reach out directly at:
                </p>
                <a
                  href="mailto:gigihrahmanditta@gmail.com"
                  className="text-blue-600 font-medium hover:underline mt-1 inline-block"
                >
                  gigihrahmanditta@gmail.com
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
