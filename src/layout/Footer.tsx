// src/layout/Footer.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Footer() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!emailRegex.test(email.toLowerCase())) {
      setError("Please enter a valid email address.");
      return;
    }

    const emailToSend = email;
    setEmail("");

    // Later we will send this to Firestore / email service
    console.log("New subscriber:", emailToSend);
    console.log("Notify admin at: rohit.acharya.ce@gmail.com");

    navigate("/subscribed", { state: { email: emailToSend } });
  };

  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 py-4 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-500 dark:text-slate-400">
        <div className="text-left">
          <p className="font-semibold text-slate-900 dark:text-white">
            JobCareerNepal
          </p>
          <p>© 2025 • All rights reserved</p>
        </div>

        <form
          className="flex flex-row items-center gap-2"
          onSubmit={handleSubscribe}
        >
          <input
            className="input w-56"
            placeholder="Your email for job alerts"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="btn btn-primary" type="submit">
            Subscribe
          </button>
        </form>
      </div>

      {error && (
        <p className="container mt-1 text-xs text-red-500">{error}</p>
      )}
    </footer>
  );
}
