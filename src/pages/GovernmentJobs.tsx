import { useMemo, useState } from "react";

type GovtLink = {
  name: string;
  desc: string;
  url: string;
  category: "PSC" | "Ministry" | "Bank" | "University" | "Other";
};

export default function GovernmentJobs() {
  const [q, setQ] = useState("");

  const LINKS: GovtLink[] = useMemo(
    () => [
      {
        name: "Public Service Commission (PSC) – Nepal",
        desc: "Official government vacancy notices (Lok Sewa Aayog).",
        url: "https://psc.gov.np/",
        category: "PSC",
      },
      {
        name: "Nepal Rastra Bank (NRB)",
        desc: "Central bank vacancies and career notices.",
        url: "https://www.nrb.org.np/",
        category: "Bank",
      },
      {
        name: "Rastriya Banijya Bank (RBB)",
        desc: "Bank vacancy/career announcements.",
        url: "https://www.rbb.com.np/",
        category: "Bank",
      },
      {
        name: "Agricultural Development Bank (ADBL)",
        desc: "Bank vacancy/career announcements.",
        url: "https://www.adbl.gov.np/",
        category: "Bank",
      },
      {
        name: "Tribhuvan University (TU)",
        desc: "University notices including positions and tenders.",
        url: "https://www.tu.edu.np/",
        category: "University",
      },
      {
        name: "Kathmandu University (KU)",
        desc: "University notices and openings.",
        url: "https://ku.edu.np/",
        category: "University",
      },
      {
        name: "Ministry of Health and Population (MoHP)",
        desc: "Health-related public notices and openings.",
        url: "https://mohp.gov.np/",
        category: "Ministry",
      },
      {
        name: "Government of Nepal (Main Portal)",
        desc: "Central government portal with links to ministries/agencies.",
        url: "https://www.nepal.gov.np/",
        category: "Other",
      },
    ],
    []
  );

  const filtered = LINKS.filter((l) => {
    const s = (l.name + " " + l.desc + " " + l.category).toLowerCase();
    return s.includes(q.toLowerCase());
  });

  return (
    <main className="container py-10">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white">
          Government Jobs (Official Links)
        </h1>
        <p className="text-slate-600 dark:text-slate-300 max-w-3xl">
          Government vacancies often come as official notices where salary and structured details may not be available.
          So JobCareerNepal lists trusted <span className="font-semibold">official sources</span> and redirects you to apply there.
        </p>
      </div>

      {/* Search bar */}
      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search: PSC, bank, ministry, university..."
          className="input w-full sm:max-w-xl"
        />
        <div className="text-sm text-slate-500 dark:text-slate-400 flex items-center">
          Showing <span className="mx-1 font-semibold">{filtered.length}</span> sources
        </div>
      </div>

      {/* Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((l) => (
          <div key={l.url} className="card">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {l.name}
                </h2>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                  {l.desc}
                </p>
              </div>

              <span className="text-xs px-2 py-1 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-200">
                {l.category}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <a
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-4 py-2"
              >
                Open Official Site →
              </a>

              <span className="text-xs text-slate-500 dark:text-slate-400">
                External link
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-10 text-sm text-slate-600 dark:text-slate-300">
        Want a source added? Send the official link to us and we’ll include it.
      </div>
    </main>
  );
}
