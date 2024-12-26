import { useState, useRef } from "react";
import { CONTACT } from "../constants";
import { motion } from "motion/react";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <div className="border-b border-neutral-900 pb-10">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="my-6 text-center text-3xl"
      >
        Get in Touch
      </motion.h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col gap-6 max-w-lg mx-auto"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-2 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-2 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-2">Your Message</span>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-2 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-2 px-6 outline-none w-fit text-white bg-gray-900
            font-bold shadow-md shadow-primary rounded-lg"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      <div className="text-center tracking-tighter mt-6">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b text-white">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
