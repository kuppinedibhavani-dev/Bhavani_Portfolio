import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/contact.png";




const Contact = ({darkMode}) => {
   


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_fek6eph",
      "template_jz4l1ab",
      form.current,
      "6V2GvaDYKRLPrRVs1"
    )
    .then(
      () => {
        alert("Message Sent Successfully 🚀");
        form.current.reset();
      },
      (error) => {
        alert("Failed to send message ❌");
        console.log(error);
      }
    );
  };

  return (
  <section id="contact"
    className={`min-h-screen flex items-center justify-center p-6 transition-all duration-500 ${
      darkMode
        ? "bg-[#0f1b2d] text-white"
        : "bg-gray-100 text-black"
    }`}
  >
    <div className="w-full max-w-6xl flex flex-col md:flex-row items-center gap-12">

      {/* Image */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex justify-center"
      >
        <img
          src={contactImg}
          alt="contact"
          className="w-280px md:w-380px"
        />
      </motion.div>

      {/* Form */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`flex-1 p-8 md:p-10 rounded-2xl shadow-xl w-full max-w-xl transition-all duration-500 ${
          darkMode
            ? "bg-[#1b2a41]"
            : "bg-white"
        }`}
      >
        <h2 className="text-3xl font-bold">
          Get In <span className="text-orange-500">Touch</span>
        </h2>

        <p className={`mt-2 mb-6 ${
          darkMode ? "text-gray-400" : "text-gray-600"
        }`}>
          Let's discuss your project
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="from_name"
              placeholder="First Name"
              required
              className={`w-full md:w-1/2 px-4 py-3 rounded-lg border outline-none ${
                darkMode
                  ? "bg-[#0f1b2d] border-gray-600 focus:border-orange-500"
                  : "bg-gray-100 border-gray-300 focus:border-orange-500"
              }`}
            />

            <input
              type="text"
              name="last_name"
              placeholder="Last Name"
              required
              className={`w-full md:w-1/2 px-4 py-3 rounded-lg border outline-none ${
                darkMode
                  ? "bg-[#0f1b2d] border-gray-600 focus:border-orange-500"
                  : "bg-gray-100 border-gray-300 focus:border-orange-500"
              }`}
            />
          </div>

          <input
            type="email"
            name="from_email"
            placeholder="Email Address"
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none ${
              darkMode
                ? "bg-[#0f1b2d] border-gray-600 focus:border-orange-500"
                : "bg-gray-100 border-gray-300 focus:border-orange-500"
            }`}
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none ${
              darkMode
                ? "bg-[#0f1b2d] border-gray-600 focus:border-orange-500"
                : "bg-gray-100 border-gray-300 focus:border-orange-500"
            }`}
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className={`w-full px-4 py-3 rounded-lg border outline-none ${
              darkMode
                ? "bg-[#0f1b2d] border-gray-600 focus:border-orange-500"
                : "bg-gray-100 border-gray-300 focus:border-orange-500"
            }`}
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 bg-linear-to-r from-orange-500 to-orange-600 rounded-lg font-semibold text-white"
          >
            Send Message
          </motion.button>

        </form>
      </motion.div>

    </div>
  </section>
);
}

export default Contact;
