// src/pages/Subscribed.tsx
import { Link, useLocation } from "react-router-dom";

type LocationState = {
  email?: string;
};

export default function Subscribed() {
  const location = useLocation();
  const state = location.state as LocationState | null;
  const email = state?.email;

  return (
    <main className="container min-h-[60vh] flex flex-col items-center justify-center text-center py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold mb-4 text-slate-900 dark:text-slate-100">
        Thank you for subscribing!
      </h1>

      <p className="text-slate-600 dark:text-slate-300 max-w-xl mb-6">
        {email
          ? `We’ve received ${email} and will send you job alerts and updates from JobCareerNepal.`
          : "We’ve received your email and will send you job alerts and updates from JobCareerNepal."}
      </p>

      <Link to="/" className="btn btn-primary">
        Back to home
      </Link>
    </main>
  );
}
