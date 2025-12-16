import heroNepal from "../assets/hero-nepal.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="min-h-screen pb-20">

      {/* ---------------------------------------------------- */}
      {/* HERO SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="container grid lg:grid-cols-2 gap-12 py-16 items-center">
        
        {/* LEFT SIDE */}
        <div>
          <div className="mb-4 inline-block px-4 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-sm text-slate-600 dark:text-slate-300">
            🇳🇵 Verified Nepali jobs — redirect to official company sites only
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-slate-900 dark:text-white">
            Find Your Next <br />
            Opportunity in Nepal <br />
            <span className="text-emerald-500">
              with Confidence & Clarity.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            JobCareerNepal is Nepal’s verified job aggregator. We remove fake
            listings, enrich job details, and send you directly to official hiring
            pages. No agents. No commissions. No middlemen — ever.
          </p>

          {/* SEARCH BAR */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl">
            <input
              type="text"
              placeholder="Job title, skill, or keyword"
              className="input flex-1"
            />
            <input
              type="text"
              placeholder="City, Country or Remote"
              className="input flex-1"
            />
            <button className="btn btn-primary px-6 py-3">Search Jobs</button>
          </div>

          <div className="mt-3">
            <Link
              to="/search"
              className="text-emerald-600 dark:text-emerald-400 underline text-sm"
            >
              Open job directory →
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE – HERO IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={heroNepal}
            alt="Nepal job opportunities"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* WHY CHOOSE US */}
      {/* ---------------------------------------------------- */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
          Why JobCareerNepal?
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="card">
            <h3 className="text-xl font-semibold">Radical Transparency</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Salary-first ranking, verified-active badges, and no cluttered ads.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Speed</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              Fast search, clear filters, instant apply via official company pages.
            </p>
          </div>

          <div className="card">
            <h3 className="text-xl font-semibold">Trust</h3>
            <p className="text-slate-600 dark:text-slate-300 mt-2">
              No agents. No middlemen. We only show verified, source-true listings.
            </p>
          </div>

        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* STATS SECTION */}
      {/* ---------------------------------------------------- */}
      <section className="bg-slate-100 dark:bg-slate-900 py-16 my-10">
        <div className="container grid sm:grid-cols-3 text-center gap-10">
          <div>
            <p className="text-4xl font-extrabold text-emerald-500">+50</p>
            <p className="text-slate-600 dark:text-slate-300">Monthly Visitors</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-500">+20</p>
            <p className="text-slate-600 dark:text-slate-300">Verified Jobs</p>
          </div>
          <div>
            <p className="text-4xl font-extrabold text-emerald-500">+20</p>
            <p className="text-slate-600 dark:text-slate-300">Companies Tracked</p>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* BLOG PREVIEW */}
      {/* ---------------------------------------------------- */}
      <section className="container py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Latest Career Tips & Guides
          </h2>
          <Link
            to="/blog"
            className="text-emerald-600 dark:text-emerald-400 underline"
          >
            View all →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="card hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-2">
                How to prepare for interviews in Nepal {n}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm">
                Tips, strategies, and frameworks Nepali applicants should use to get hired faster.
              </p>
              <Link
                to={`/blog/post-${n}`}
                className="text-emerald-500 underline text-sm mt-3 inline-block"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ---------------------------------------------------- */}
      {/* ABOUT US */}
      {/* ---------------------------------------------------- */}
      <section className="container py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
          About JobCareerNepal
        </h2>

        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl">
          We started JobCareerNepal in 2025 with a simple vision — to make
          Nepal’s job market transparent, fair, and accessible. We fight fake
          listings, remove duplicated posts, enrich job details through smart
          indexing, and help Nepali job seekers apply confidently, directly
          through official company pages.
        </p>

        <p className="text-lg text-slate-700 dark:text-slate-300 max-w-3xl mt-4">
          Our mission is to empower every Nepali professional with clarity and
          opportunity — no matter their background, location, or experience.
        </p>
      </section>

    </main>
  );
}
