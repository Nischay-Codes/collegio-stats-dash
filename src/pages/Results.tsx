import { GraduationCap } from "lucide-react";

const Results = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-info p-3">
          <GraduationCap className="h-6 w-6 text-info-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Results Management</h1>
          <p className="text-muted-foreground mt-1">View and manage student results</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-12 text-center">
        <p className="text-muted-foreground">Results management features coming soon...</p>
      </div>
    </div>
  );
};

export default Results;
