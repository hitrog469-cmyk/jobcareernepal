// src/pages/Blog.tsx
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <main className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
      <section className="container py-12 md:py-16 space-y-6">
        <h1 className="text-3xl md:text-4xl font-extrabold">
          JobCareerNepal Blog &amp; Guides
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-2xl">
          Practical advice for job seekers in Nepal. These are placeholder
          articles for now, but you can replace them later with real content.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-wide text-emerald-500">
              Getting started
            </p>
            <h2 className="text-xl font-semibold">
              7 common mistakes Nepali job seekers make
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              From incomplete applications to ignoring salary ranges, here are
              simple things you can avoid from day one.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full article coming soon.
            </p>
          </article>

          <article className="card p-6 space-y-3">
            <p className="text-xs uppercase tracking-wide text-emerald-500">
              Remote work
            </p>
            <h2 className="text-xl font-semibold">
              Finding legitimate remote jobs from Nepal
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              How to filter scams, understand time zones, and stand out when
              applying to international companies.
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Full article coming soon.
            </p>
          </article>
        </div>

        <div className="pt-4">
          <Link to="/" className="text-sm text-emerald-500 hover:underline">
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}
