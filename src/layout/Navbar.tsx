/* src/layout/Navbar.tsx */

import { Link, NavLink } from "react-router-dom";
import ThemeToggle from "../shared/ThemeToggle";
import logo from "../assets/jcn_logo.png";

const NAV_ITEMS = [
  { to: "/search", label: "Find Jobs" },
  { to: "/companies", label: "Company Reviews" },
  { to: "/salary", label: "Salary Explorer" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/government-jobs", label: "Govt Jobs" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        
        {/* LOGO + BRAND */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Job Career Nepal logo"
            className="w-10 h-10 rounded-lg object-contain"
          />

          {/* TEXT LOGO — BLACK IN BOTH MODES */}
          <div className="leading-tight">
            <div className="font-extrabold text-sm tracking-wide text-black dark:text-black">
              JOB CAREER
            </div>
            <div className="font-bold text-xs tracking-[0.3em] text-black dark:text-black">
              NEPAL
            </div>
          </div>
        </Link>

        {/* NAVIGATION */}
        <nav className="hidden md:flex items-center gap-2 text-sm">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-full border transition ${
                  isActive
                    ? "border-emerald-500 text-emerald-600"
                    : "border-transparent text-slate-700 hover:border-slate-300"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Link
            to="/login"
            className="px-4 py-1.5 rounded-full border border-slate-300 text-sm text-slate-700 hover:bg-slate-100"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="px-4 py-1.5 rounded-full bg-emerald-500 text-white text-sm hover:bg-emerald-600"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
