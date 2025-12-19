// src/pages/Signup.tsx
import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider, appleProvider } from "../firebase";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const emailOk = useMemo(() => emailRegex.test(email.trim()), [email]);

  async function handleEmailSignup(e: FormEvent) {
    e.preventDefault();
    setErr(null);

    if (!emailOk) return setErr("Please enter a valid email address.");
    if (password.length < 6) return setErr("Password must be at least 6 characters.");

    setBusy(true);
    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      navigate("/");
    } catch (error: any) {
      setErr(error?.message || "Signup failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleGoogle() {
    setErr(null);
    setBusy(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error: any) {
      setErr(error?.message || "Google signup failed.");
    } finally {
      setBusy(false);
    }
  }

  async function handleApple() {
    setErr(null);
    setBusy(true);
    try {
      await signInWithPopup(auth, appleProvider);
      navigate("/");
    } catch (error: any) {
      setErr(
        error?.message ||
          "Apple signup failed. (Apple requires extra setup in Firebase + Apple Developer.)"
      );
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-4 py-10 bg-slate-50 dark:bg-slate-950">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl p-6 sm:p-8">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white text-center">
          Sign Up
        </h1>
        <p className="text-center mt-2 text-slate-600 dark:text-slate-300">
          Create your account on{" "}
          <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
            JobCareerNepal
          </span>
        </p>

        {err && (
          <div className="mt-5 rounded-xl border border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-900/50 dark:bg-rose-950/40 dark:text-rose-200 px-4 py-3 text-sm">
            {err}
          </div>
        )}

        {/* Social */}
        <div className="mt-6 grid gap-3">
          <button
            disabled={busy}
            onClick={handleGoogle}
            className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-3 font-semibold text-slate-900 dark:text-white flex items-center justify-center gap-3"
          >
            <img src="/Google.png" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>

          <button
            disabled={busy}
            onClick={handleApple}
            className="w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 px-4 py-3 font-semibold text-slate-900 dark:text-white flex items-center justify-center gap-3"
          >
            <img src="/Apple.png" alt="Apple" className="w-5 h-5" />
            Continue with Apple
          </button>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-xs text-slate-500 dark:text-slate-400">OR SIGN UP WITH EMAIL</span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <form onSubmit={handleEmailSignup} className="mt-6 grid gap-4">
          <div>
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Minimum 6 characters"
              className="mt-2 w-full rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
            />
          </div>

          <button
            disabled={busy}
            className="mt-2 w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-3 disabled:opacity-60"
          >
            {busy ? "Please wait..." : "Create Account"}
          </button>

          <p className="text-center text-sm text-slate-600 dark:text-slate-300">
            Already have an account?{" "}
            <Link to="/login" className="text-emerald-700 dark:text-emerald-400 hover:underline">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
