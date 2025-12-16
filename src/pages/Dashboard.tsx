export default function Dashboard(){
  return (
    <div className="container py-8 grid gap-4">
      <h1 className="text-2xl font-extrabold">Your Dashboard</h1>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card">
          <div className="font-semibold mb-2">Application Tracker (Kanban)</div>
          <div className="h-40 placeholder-rect" />
        </div>
        <div className="card">
          <div className="font-semibold mb-2">Resume Analyzer</div>
          <div className="h-40 placeholder-rect" />
        </div>
      </div>
    </div>
  );
}
