import { useState } from "react";

export default function SearchBar({
  compact = false,
  onSearch,
  value,
}: {
  compact?: boolean;
  onSearch: (q: { q: string; loc: string }) => void;
  value?: { q?: string; loc?: string };
}) {
  const [q, setQ] = useState(value?.q || "");
  const [loc, setLoc] = useState(value?.loc || "");

  return (
    <div className={`grid ${compact ? "grid-cols-[1fr,220px,auto]" : "grid-cols-1 md:grid-cols-[1fr,320px,auto]"} gap-2`}>
      <input className="input py-3" placeholder="Job title, skill, or keyword" value={q} onChange={(e)=>setQ(e.target.value)} />
      <input className="input py-3" placeholder="City, Country or Remote" value={loc} onChange={(e)=>setLoc(e.target.value)} />
      <button className="btn btn-primary" onClick={()=>onSearch({q, loc})}>Search Jobs</button>
    </div>
  );
}
