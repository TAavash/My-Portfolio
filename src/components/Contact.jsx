import { useState, useRef } from "react";
import axios from "axios";
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
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const payload = {
      from: form.email,
      to: "your-email@example.com", // replace with your actual recipient email
      subject: `New message from ${form.name}`,
      text: form.message,
    };

    try {
      const res = await axios.post("https://api.resend.com/emails", payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer re_2qSn7LBd_Puujy2j1e9qZKqshJzR7QMTo`, // your Resend API key
        },
      });

      if (res.status === 200) {
        setResponseMessage("Message sent successfully!");
      } else {
        setResponseMessage("Failed to send the message. Please try again.");
      }
    } catch (error) {
      setResponseMessage(
        `Error: ${error.response ? error.response.data.message : error.message}`
      );
    } finally {
      setLoading(false);
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-6 text-center text-3xl"
      >
        Get in Touch
      </motion.h2>
      <motion.form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-6 flex flex-col gap-6 mx-auto max-w-lg"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <motion.label
          className="flex flex-col"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="text-white font-medium mb-2">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-3 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </motion.label>
        <motion.label
          className="flex flex-col"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <span className="text-white font-medium mb-2">Your Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-3 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </motion.label>
        <motion.label
          className="flex flex-col"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-white font-medium mb-2">Your Message</span>
          <textarea
            rows="5"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="What do you want to say?"
            className="bg-tertiary py-3 px-4 placeholder:text-secondary 
              text-black rounded-lg outline-none border-none font-medium"
          />
        </motion.label>

        <motion.button
          type="submit"
          className="bg-tertiary py-2 px-6 outline-none w-fit text-white 
            font-bold shadow-md shadow-primary rounded-xl"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          {loading ? "Sending..." : "Send"}
        </motion.button>
      </motion.form>
      {responseMessage && <p className="text-center mt-4">{responseMessage}</p>}
      <div className="text-center tracking-tighter mt-6">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-2"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
