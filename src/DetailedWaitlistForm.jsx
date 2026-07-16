import { useState } from "react";
import { motion } from "framer-motion";

const FormInput = ({ id, label, placeholder, value, onChange, type = "text" }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-primary">
      {label} <span className="text-teal-300">*</span>
    </label>
    <div className="mt-1">
      <input
        type={type}
        name={id}
        id={id}
        required
        value={value}
        onChange={onChange}
        className="block w-full rounded-lg border border-border bg-white/5 px-4 py-3 text-primary placeholder:text-secondary focus:border-primary focus:outline-none focus:ring-2 focus:ring-teal-300/50"
        placeholder={placeholder}
      />
    </div>
  </div>
);

export default function DetailedWaitlistForm() {
  const [formData, setFormData] = useState({
    youtube: "",
    twitch: "",
    discord: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form data submitted:", formData);
    alert(`Thank you for joining, ${formData.email}! We've received your details.`);
    setFormData({ youtube: "", twitch: "", discord: "", email: "" });
  };

  return (
    <div className="mx-auto max-w-4xl rounded-[2rem] border border-teal-300/20 bg-glass px-6 py-16 text-center shadow-[0_0_100px_rgba(45,212,191,.08)] sm:px-12">
      <p className="font-semibold text-teal-300">Early Access</p>
      <h2 className="mt-4 text-4xl font-bold tracking-tight text-primary sm:text-5xl">
        Join the Waitlist
      </h2>
      <p className="mx-auto mt-4 max-w-lg text-secondary">
        Tell us about yourself so we can set you up on day one.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-lg space-y-6 text-left"
      >
        <FormInput
          id="youtube"
          label="YouTube Channel"
          placeholder="youtube.com/@ or channel name"
          value={formData.youtube}
          onChange={handleChange}
        />
        <FormInput
          id="twitch"
          label="Twitch Channel"
          placeholder="twitch.tv/ or channel name"
          value={formData.twitch}
          onChange={handleChange}
        />
        <FormInput
          id="discord"
          label="Discord Username"
          placeholder="username or username#0000"
          value={formData.discord}
          onChange={handleChange}
        />
        <FormInput
          id="email"
          label="Email"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={handleChange}
        />

        <div className="text-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="rounded-lg bg-teal-300 px-8 py-3 font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-px hover:bg-teal-200 hover:shadow-lg hover:shadow-teal-300/40"
          >
            Join Waitlist →
          </motion.button>
          <p className="mt-4 text-xs text-secondary">
            All fields are required. Free during beta — no credit card needed.
          </p>
        </div>
      </form>
    </div>
  );
}