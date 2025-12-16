import { useMemo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "../shared/SearchBar";
import FiltersPanel from "../shared/FiltersPanel";
import JobCard from "../shared/JobCard";
import { JOBS } from "../data";

const PAGE_SIZE = 5;

type SortKey = "relevance" | "salaryDesc" | "salaryAsc";

export default function Search() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  const [filters, setFilters] = useState({
    q: params.get("q") || "",
    loc: params.get("loc") || "",
    minSalary: Number(params.get("minSalary") || 0),
    remote: params.get("remote") || "any",
    type: params.get("type") || "any",
  });

  const [sort, setSort] = useState<SortKey>("relevance");
  const [page, setPage] = useState(1);

  // reset page when filters/sort change
  useEffect(() => {
    setPage(1);
  }, [filters, sort]);

  const filtered = useMemo(() => {
    return JOBS.filter((j) => {
      const hay = `${j.title} ${j.company} ${j.city} ${j.tags.join(" ")}`.toLowerCase();
      const okQ = !filters.q || hay.includes(filters.q.toLowerCase());
      const okLoc =
        !filters.loc ||
        j.city.toLowerCase().includes(filters.loc.toLowerCase()) ||
        (filters.loc.toLowerCase() === "remote" && j.remote);

      const okSalary = j.salaryMax >= (filters.minSalary || 0);
      const okRemote =
        filters.remote === "any" ||
        (filters.remote === "remote" && j.remote) ||
        (filters.remote === "onsite" && !j.remote);
      const okType = filters.type === "any" || j.type === filters.type;

      return okQ && okLoc && okSalary && okRemote && okType;
    });
  }, [filters]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    if (sort === "salaryDesc") {
      arr.sort((a, b) => b.salaryMax - a.salaryMax);
    } else if (sort === "salaryAsc") {
      arr.sort((a, b) => a.salaryMin - b.salaryMin);
    }
    // relevance = original order (from data)
    return arr;
  }, [filtered, sort]);

  const visible = sorted.slice(0, PAGE_SIZE * page);
  const hasMore = sorted.length > visible.length;

  return (
    <div className="container py-6 grid gap-4 md:grid-cols-[280px,1fr]">
      {/* Sidebar filters (desktop) */}
      <aside className="card h-fit sticky top-24 hidden md:block">
        <FiltersPanel value={filters} onChange={setFilters} />
      </aside>

      {/* Main column */}
      <section className="grid gap-3">
        <SearchBar
          compact
          value={{ q: filters.q, loc: filters.loc }}
          onSearch={(q) => setFilters((prev) => ({ ...prev, ...q }))}
        />

        {/* result meta + sort */}
        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-slate-400">
          <span>{sorted.length} results • Salary-first</span>
          <div className="flex items-center gap-2">
            <span>Sort:</span>
            <select
              className="input py-1 px-2 w-auto"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
            >
              <option value="relevance">Relevance</option>
              <option value="salaryDesc">Highest salary</option>
              <option value="salaryAsc">Lowest salary</option>
            </select>
          </div>
        </div>

        {/* results */}
        {visible.length === 0 ? (
          <div className="card grid gap-3 text-sm">
            <div className="font-semibold">No jobs match your filters.</div>
            <p className="text-slate-400">
              Try clearing some filters, lowering the minimum salary, or searching only by city/job title.
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                className="btn btn-primary"
                onClick={() =>
                  setFilters({ q: "", loc: "", minSalary: 0, remote: "any", type: "any" })
                }
              >
                Reset filters
              </button>
              <Link className="btn" to="/">
                Back to homepage
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="grid gap-3">
              {visible.map((job) => (
                <Link key={job.id} to={`/job/${job.id}`}>
                  <JobCard job={job} />
                </Link>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-2">
                <button className="btn" onClick={() => setPage((p) => p + 1)}>
                  Load more jobs
                </button>
              </div>
            )}
          </>
        )}
      </section>
    </div>
  );
}
