// src/pages/Signup.tsx
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogo from "../assets/Google.png";
import AppleLogo from "../assets/Apple.png";
import {
  auth,
  googleProvider,
  appleProvider,
} from "../firebase";
import {
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignup = async () => {
    try {
      setError(null);
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google signup failed.");
    } finally {
      setLoading(false);
    }
  };

  const handleAppleSignup = async () => {
    try {
      setError(null);
      setLoading(true);
      await signInWithPopup(auth, appleProvider);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(
        "Apple sign-in is not fully configured yet. Please use Google or email."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleEmailSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Email signup failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center pt-20 pb-32">
      <div className="bg-slate-900/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-10 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          Create Account
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Join <span className="text-emerald-400">JobCareerNepal</span> today
        </p>

        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/40 border border-red-500/60 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        {/* GOOGLE BUTTON */}
        <button
          onClick={handleGoogleSignup}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-3 rounded-full font-medium shadow hover:opacity-90 transition disabled:opacity-60"
        >
          <img src={GoogleLogo} alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>

        {/* APPLE BUTTON */}
        <button
          onClick={handleAppleSignup}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-3 rounded-full font-medium shadow hover:opacity-90 transition mt-4 disabled:opacity-60"
        >
          <img src={AppleLogo} alt="Apple" className="h-5 w-5" />
          Continue with Apple
        </button>

        <div className="text-center text-slate-400 text-xs my-6">
          OR SIGN UP WITH EMAIL
        </div>

        <form onSubmit={handleEmailSignup} className="space-y-4">
          <input
            type="email"
            className="input w-full"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="input w-full"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 rounded-full disabled:opacity-60"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Already have an account?{" "}
          <Link className="text-emerald-400" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
