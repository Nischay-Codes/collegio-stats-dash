import { UserPlus } from "lucide-react";

const Admissions = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-primary p-3">
          <UserPlus className="h-6 w-6 text-primary-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admissions</h1>
          <p className="text-muted-foreground mt-1">Manage student admissions and applications</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-12 text-center">
        <p className="text-muted-foreground">Admissions management features coming soon...</p>
      </div>
    </div>
  );
};

export default Admissions;
