// src/pages/Login.tsx
import { FormEvent, useState } from "react";
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
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      setError(null);
      setLoading(true);
      await signInWithPopup(auth, googleProvider);
      navigate("/dashboard"); // redirect after success
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google login failed.");
    } finally {
      setLoading(false);
    }
  };

  // APPLE LOGIN (will only work once Apple is fully configured)
  const handleAppleLogin = async () => {
    try {
      setError(null);
      setLoading(true);
      await signInWithPopup(auth, appleProvider);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(
        "Apple login is not fully configured yet. Please use Google or email."
      );
    } finally {
      setLoading(false);
    }
  };

  // EMAIL/PASSWORD LOGIN
  const handleEmailLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      setLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Email login failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center pt-20 pb-32">
      <div className="bg-slate-900/60 dark:bg-slate-800/60 backdrop-blur-xl rounded-2xl p-10 w-full max-w-md shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-3 text-white">
          Login
        </h1>

        <p className="text-center text-slate-300 mb-8">
          Welcome back to{" "}
          <span className="text-emerald-400">JobCareerNepal</span>
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="mb-4 text-sm text-red-400 bg-red-900/40 border border-red-500/60 rounded-lg px-3 py-2">
            {error}
          </div>
        )}

        {/* GOOGLE LOGIN */}
        <button
          onClick={handleGoogleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-3 rounded-full font-medium shadow hover:opacity-90 transition disabled:opacity-60"
        >
          <img src={GoogleLogo} alt="Google" className="h-5 w-5" />
          Continue with Google
        </button>

        {/* APPLE LOGIN */}
        <button
          onClick={handleAppleLogin}
          disabled={loading}
          className="w-full flex items-center justify-center gap-3 bg-white text-slate-900 py-3 rounded-full font-medium shadow hover:opacity-90 transition mt-4 disabled:opacity-60"
        >
          <img src={AppleLogo} alt="Apple" className="h-5 w-5" />
          Continue with Apple
        </button>

        {/* DIVIDER */}
        <div className="text-center text-slate-400 text-xs my-6">
          OR LOGIN WITH EMAIL
        </div>

        {/* EMAIL FORM */}
        <form onSubmit={handleEmailLogin} className="space-y-4 mt-6">
          <div>
            <label className="text-slate-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input mt-1 w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-slate-300">Password</label>
            <input
              type="password"
              placeholder="••••••"
              className="input mt-1 w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-primary w-full py-3 mt-3 rounded-full disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-center text-slate-400 mt-6 text-sm">
          Don’t have an account?{" "}
          <Link className="text-emerald-400" to="/signup">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
