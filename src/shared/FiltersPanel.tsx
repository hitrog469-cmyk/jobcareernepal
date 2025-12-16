export default function FiltersPanel({
  value,
  onChange,
}: {
  value: any;
  onChange: (v: any) => void;
}) {
  return (
    <div className="grid gap-4">
      <div>
        <div className="label">Experience Level</div>
        <select className="input mt-1" value={value.type} onChange={(e)=>onChange({...value, type:e.target.value})}>
          <option value="any">Any</option>
          <option value="intern">Intern</option>
          <option value="entry">Entry</option>
          <option value="mid">Mid</option>
          <option value="senior">Senior</option>
        </select>
      </div>

      <div>
        <div className="label">Minimum Salary (NRs / mo)</div>
        <input type="number" className="input mt-1" value={value.minSalary} onChange={(e)=>onChange({...value, minSalary:Number(e.target.value)})}/>
      </div>

      <div>
        <div className="label">Work Mode</div>
        <select className="input mt-1" value={value.remote} onChange={(e)=>onChange({...value, remote:e.target.value})}>
          <option value="any">Any</option>
          <option value="remote">Remote</option>
          <option value="onsite">On-site</option>
        </select>
      </div>

      <div>
        <div className="label">Location</div>
        <input className="input mt-1" placeholder="Kathmandu, Pokhara..." value={value.loc} onChange={(e)=>onChange({...value, loc:e.target.value})}/>
      </div>
    </div>
  );
}
