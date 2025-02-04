import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { ArrowLeft, Package, TrendingUp, DollarSign, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const mockData = [
  { name: "Jan", value: 65 },
  { name: "Feb", value: 45 },
  { name: "Mar", value: 78 },
  { name: "Apr", value: 52 },
  { name: "May", value: 89 },
  { name: "Jun", value: 94 },
];

const ItemsSummary = () => {
  const stats = [
    { title: "Total Items", value: "2,847", icon: Package, change: "+12%" },
    { title: "Active Listings", value: "2,345", icon: ShoppingCart, change: "+5%" },
    { title: "Monthly Sales", value: "$34.5k", icon: DollarSign, change: "+18%" },
    { title: "Growth Rate", value: "23%", icon: TrendingUp, change: "+2%" },
  ];

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="p-4">
      <Button variant="outline" className="mb-6 " onClick={handleBack}>
        <ArrowLeft />
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                </div>
                <div className="p-2 bg-blue-100 rounded-full">
                  <stat.icon className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <div className="mt-2">
                <span className={`text-sm ${stat.change.startsWith("+") ? "text-green-600" : "text-red-600"}`}>
                  {stat.change} from last month
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-[40%,1fr] gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((_, index) => (
                <div key={index} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded">
                  <div>
                    <p className="font-medium">Item #{1000 + index}</p>
                    <p className="text-sm text-gray-500">Updated 2h ago</p>
                  </div>
                  <span className="text-sm font-medium text-blue-600">$299</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Monthly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ItemsSummary;
