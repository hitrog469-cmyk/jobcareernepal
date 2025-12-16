import type { Job } from "../types";

function Badge({ children }: { children: React.ReactNode }) {
  return <span className="chip">{children}</span>;
}

function pay(min: number, max: number) {
  if (min === 0 && max === 0) return "Salary not disclosed";
  return `NRs ${min.toLocaleString()} – ${max.toLocaleString()}/mo`;
}

export default function JobCard({ job }: { job: Job }) {
  return (
    <article className="card hover:shadow-md transition">
      <div className="flex items-start justify-between gap-3">
        <div className="w-12 h-12 placeholder-circle shrink-0" />
        <div className="min-w-0">
          <h3 className="text-base sm:text-lg font-semibold truncate">
            {job.title}
          </h3>
          <div className="text-slate-400 text-sm">
            {job.company} • {job.city} {job.remote ? "• Remote" : ""}
          </div>
        </div>
        <button
          className="btn px-3 py-1 text-xs"
          type="button"
          aria-label={`Save job: ${job.title} at ${job.company}`}
        >
          ☆ Save
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <Badge>💰 {pay(job.salaryMin, job.salaryMax)}</Badge>
        {job.verified && <Badge>✅ Verified Active</Badge>}
        {job.tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <p className="mt-2 text-slate-300 line-clamp-2">{job.teaser}</p>
    </article>
  );
}
