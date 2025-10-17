import { Home } from "lucide-react";

const Hostel = () => {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="rounded-xl bg-warning p-3">
          <Home className="h-6 w-6 text-warning-foreground" />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Hostel Management</h1>
          <p className="text-muted-foreground mt-1">Manage hostel allocations and occupancy</p>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-12 text-center">
        <p className="text-muted-foreground">Hostel management features coming soon...</p>
      </div>
    </div>
  );
};

export default Hostel;
