export default function App() {
  return (
    <main>
      <header className="sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800 backdrop-blur bg-white/80 dark:bg-slate-950/70">
        <div className="container flex items-center justify-between py-3">
          <div className="flex items-center gap-2 font-extrabold">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-brand to-emerald-500 grid place-items-center text-white">VA</div>
            <div>
              <div>VeriApply</div>
              <div className="text-xs text-slate-500">Transparency • Speed • Trust</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="btn">Login</button>
            <button className="btn btn-primary">Sign Up</button>
          </div>
        </div>
      </header>

      <section className="container py-12 grid gap-6">
        <span className="inline-flex items-center gap-2 text-sm border border-slate-200 dark:border-slate-800 rounded-full px-3 py-1 bg-white dark:bg-slate-900">
          ✅ Verified jobs — apply on official company sites.
        </span>
        <h1 className="text-4xl sm:text-6xl font-black" style={{fontFamily:'var(--font-display)'}}>
          Find Your Next Role, With Clarity.
        </h1>
        <p className="text-slate-600 dark:text-slate-400 max-w-2xl">
          Intelligent aggregator: we find and verify jobs, enrich the data, and always send you to the company’s official ATS.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[1fr,300px,auto] gap-2">
          <input className="card py-3" placeholder="Job title, skill, or keyword" />
          <input className="card py-3" placeholder="City, Country or Remote" />
          <button className="btn btn-primary">Search Jobs</button>
        </div>
      </section>
    </main>
  )
}
