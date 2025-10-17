import { Users, DollarSign, Home, GraduationCap } from "lucide-react";
import StatCard from "@/components/StatCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Mock data for charts
const admissionsData = [
  { month: "Jan", admissions: 45 },
  { month: "Feb", admissions: 52 },
  { month: "Mar", admissions: 61 },
  { month: "Apr", admissions: 58 },
  { month: "May", admissions: 70 },
  { month: "Jun", admissions: 68 },
];

const feeCollectionData = [
  { category: "Tuition", value: 450000, color: "hsl(var(--chart-1))" },
  { category: "Hostel", value: 180000, color: "hsl(var(--chart-2))" },
  { category: "Library", value: 45000, color: "hsl(var(--chart-3))" },
  { category: "Sports", value: 35000, color: "hsl(var(--chart-4))" },
  { category: "Other", value: 25000, color: "hsl(var(--chart-5))" },
];

// Mock admin role check - in production, this would check actual authentication
const isAdmin = true; // Replace with actual role check from auth context

const AdminDashboard = () => {
  // In production, redirect non-admin users
  if (!isAdmin) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-destructive">Access Denied</h1>
          <p className="text-muted-foreground mt-2">
            You do not have permission to view this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground mt-1">
          Welcome back! Here's an overview of your institution.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Students"
          value="2,847"
          icon={Users}
          trend={{ value: "12%", isPositive: true }}
          colorClass="bg-primary"
        />
        <StatCard
          title="Fees Collected"
          value="₹73.5L"
          icon={DollarSign}
          trend={{ value: "8%", isPositive: true }}
          colorClass="bg-success"
        />
        <StatCard
          title="Hostel Occupied"
          value="1,234"
          icon={Home}
          trend={{ value: "3%", isPositive: false }}
          colorClass="bg-warning"
        />
        <StatCard
          title="New Admissions"
          value="354"
          icon={GraduationCap}
          trend={{ value: "18%", isPositive: true }}
          colorClass="bg-info"
        />
      </div>

      {/* Charts Grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Admissions</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={admissionsData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis
                  dataKey="month"
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <YAxis
                  className="text-xs"
                  tick={{ fill: "hsl(var(--muted-foreground))" }}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                />
                <Bar dataKey="admissions" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Fee Collection Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={feeCollectionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ category, percent }) =>
                    `${category}: ${(percent * 100).toFixed(0)}%`
                  }
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {feeCollectionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  formatter={(value: number) => `₹${(value / 1000).toFixed(0)}K`}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboard;
