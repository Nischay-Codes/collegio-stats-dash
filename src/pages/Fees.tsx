import { DollarSign } from "lucide-react";

const Fees = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-success p-3">
          <DollarSign className="h-6 w-6 text-success-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Fees Management</h1>
          <p className="text-muted-foreground mt-1">Track and manage fee collections</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-12 text-center">
        <p className="text-muted-foreground">Fee management features coming soon...</p>
      </div>
    </div>
  );
};

export default Fees;
