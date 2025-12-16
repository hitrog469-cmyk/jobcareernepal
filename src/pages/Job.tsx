import { useParams } from "react-router-dom";
import { JOBS } from "../data";

function salary(min:number,max:number){ return min===0&&max===0 ? "Salary not disclosed" : `NRs ${min.toLocaleString()} – ${max.toLocaleString()}/mo`; }

export default function Job() {
  const { id } = useParams();
  const job = JOBS.find((j)=> String(j.id)===id);
  if (!job) return <div className="container py-10">Job not found.</div>;

  return (
    <div className="container py-8 grid gap-5 max-w-3xl">
      <header className="grid gap-2">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 placeholder-circle" />
          <div>
            <h1 className="text-2xl font-extrabold">{job.title}</h1>
            <div className="text-slate-500">{job.company} • {job.city} {job.remote ? "• Remote available" : ""}</div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="chip">💰 {salary(job.salaryMin, job.salaryMax)}</span>
          {job.verified && <span className="chip">✅ Verified Active (checked 3h ago)</span>}
        </div>
        <div className="flex gap-2 mt-2">
          <a href={job.applyUrl} target="_blank" className="btn btn-primary">Apply on Official Website →</a>
          <button className="btn">Save</button>
          <button className="btn">Share</button>
        </div>
      </header>

      <section className="card">
        <div className="font-semibold mb-1">Quick Summary (AI)</div>
        <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400">
          <li>Lead new features for the flagship product.</li>
          <li>Requires {job.exp} years with {job.tags.slice(0,2).join(", ")}.</li>
          <li>Reports to the Hiring Manager.</li>
        </ul>
      </section>

      <section className="grid gap-3">
        <div className="flex gap-2">
          <button className="btn">Full Description</button>
          <button className="btn">Company Insights</button>
          <button className="btn">Salary & Benefits</button>
          <button className="btn">Interview Process</button>
        </div>

        {/* Placeholder long content */}
        <div className="card grid gap-3">
          <div className="h-40 placeholder-rect" />
          <p className="text-slate-700 dark:text-slate-300">{job.description}</p>
        </div>
      </section>
    </div>
  );
}
