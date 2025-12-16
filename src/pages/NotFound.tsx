import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container py-16 grid place-items-center">
      <div className="card max-w-lg text-center grid gap-4">
        <div className="w-24 h-24 mx-auto placeholder-circle" />
        <h1 className="text-3xl font-extrabold">Page not found</h1>
        <p className="text-slate-600 dark:text-slate-400">
          The page you’re looking for doesn’t exist. It may have been moved or removed.
        </p>
        <div className="flex justify-center gap-2">
          <Link className="btn btn-primary" to="/">Go Home</Link>
          <Link className="btn" to="/search">Find Jobs</Link>
        </div>
      </div>
    </div>
  );
}
