import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, googleProvider, appleProvider } from "../firebase"; // ✅ lowercase

export default function Login() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onEmailLogin(e: FormEvent) {
    e.preventDefault();
    setErr(null);
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      nav("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Login failed");
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setErr(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      nav("/dashboard");
    } catch (error: any) {
      setErr(error?.message ?? "Google login failed");
    } finally {
      setLoading(false);
    }
  }

  async function onApple() {
    setErr(null);
    setLoading(true);
    try {
      await signInWithPopup(auth, appleProvider);
      nav("/dashboard");
    } catch (error: any) {
      setErr(
        error?.message ??
          "Apple login failed (Apple provider needs extra setup in Firebase/Apple Developer)."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100">
          Login
        </h1>
        <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
          Welcome back to <span className="text-emerald-500">JobCareerNepal</span>
        </p>

        {err && (
          <div className="mt-4 rounded-xl border border-red-300 bg-red-50 p-3 text-sm text-red-700 dark:border-red-900/60 dark:bg-red-950/40 dark:text-red-200">
            {err}
          </div>
        )}

        <div className="mt-5 space-y-3">
          <button
            type="button"
            onClick={onGoogle}
            disabled={loading}
            className="w-full rounded-full border border-slate-200 bg-white py-3 font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Continue with Google
          </button>

          <button
            type="button"
            onClick={onApple}
            disabled={loading}
            className="w-full rounded-full border border-slate-200 bg-white py-3 font-semibold text-slate-900 hover:bg-slate-50 disabled:opacity-60 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
          >
            Continue with Apple
          </button>
        </div>

        <div className="my-6 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          <span className="text-xs text-slate-500 dark:text-slate-500">
            OR LOGIN WITH EMAIL
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
        </div>

        <form onSubmit={onEmailLogin} className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Email
            </label>
            <input
              className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-slate-800 dark:text-slate-200">
              Password
            </label>
            <input
              className="mt-2 w-full rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
            />
          </div>

          <button
            className="w-full rounded-full bg-emerald-500 py-3 font-bold text-white hover:bg-emerald-600 disabled:opacity-60"
            disabled={loading}
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link className="font-semibold text-emerald-500 hover:underline" to="/signup">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
