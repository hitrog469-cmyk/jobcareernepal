/* src/layout/Navbar.tsx */
import { Link, NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "../shared/ThemeToggle";
import logo from "../assets/jcn_logo.png";
import { useAuth } from "../shared/auth";
import { useMemo, useState } from "react";

const NAV_ITEMS = [
  { to: "/search", label: "Find Jobs" },
  { to: "/companies", label: "Company Reviews" },
  { to: "/salary", label: "Salary Explorer" },
  { to: "/gov-jobs", label: "Government Jobs" },
];

export default function Navbar() {
  const { user, loading, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const initials = useMemo(() => {
    const name = user?.displayName || user?.email || "User";
    const parts = name.split(" ").filter(Boolean);
    const a = parts[0]?.[0] ?? "U";
    const b = parts[1]?.[0] ?? "";
    return (a + b).toUpperCase();
  }, [user]);

  async function handleLogout() {
    setOpen(false);
    await logout();
    navigate("/");
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 dark:border-slate-800/80 backdrop-blur bg-white/70 dark:bg-slate-950/70">
      <div className="container flex items-center justify-between gap-3 py-3">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img
            src={logo}
            alt="Job Career Nepal logo"
            className="w-10 h-10 rounded-xl object-contain bg-white dark:bg-slate-900 border border-slate-200/70 dark:border-slate-800/70"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white">
              Job Career Nepal
            </span>
            <span className="text-[11px] text-slate-500 dark:text-slate-400">
              Verified Nepali jobs • Salary-first
            </span>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full border transition ${
                  isActive
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          {/* while auth is loading, avoid flicker */}
          {loading ? null : user ? (
            <div className="relative">
              <button
                onClick={() => setOpen((v) => !v)}
                className="flex items-center gap-2 px-2 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-8 h-8 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-8 h-8 rounded-full grid place-items-center bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-bold">
                    {initials}
                  </div>
                )}

                <span className="hidden sm:block text-slate-800 dark:text-slate-100 max-w-[140px] truncate">
                  {user.displayName || user.email}
                </span>

                <span className="text-slate-500 dark:text-slate-400">▾</span>
              </button>

              {open && (
                <div
                  className="absolute right-0 mt-2 w-56 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-xl overflow-hidden"
                  onMouseLeave={() => setOpen(false)}
                >
                  <div className="px-4 py-3 border-b border-slate-200/70 dark:border-slate-800/70">
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      {user.displayName || "Account"}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                      {user.email}
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setOpen(false);
                      navigate("/account");
                    }}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100"
                  >
                    My Profile
                  </button>

                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2.5 text-sm hover:bg-slate-100 dark:hover:bg-slate-900 text-rose-600 dark:text-rose-400"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button
                onClick={() => navigate("/login")}
                className="px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-900 text-slate-800 dark:text-slate-100"
              >
                Login
              </button>
              <button
                onClick={() => navigate("/signup")}
                className="px-3 py-1.5 rounded-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                Sign Up
              </button>
            </>
          )}
        </div>
      </div>

      {/* Mobile nav (simple, no extra bar — just wraps) */}
      <div className="md:hidden border-t border-slate-200/60 dark:border-slate-800/80">
        <div className="container py-2 flex flex-wrap gap-2">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full border text-sm ${
                  isActive
                    ? "border-emerald-500 text-emerald-600 dark:text-emerald-400"
                    : "border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
