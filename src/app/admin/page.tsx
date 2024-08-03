import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import data from "@/db/db";
import { formatCurrency, formatNumber } from "@/lib/formatters";
import {
  getProductData,
  getSalesData,
  getUserData,
} from "../data-access/dashboard";

type DashBoradCardProps = {
  title: string;
  subtitle: string;
  body: string;
};

export default async function AdminDashBoard() {
  const [saleData, userData, productData] = await Promise.all([
    getSalesData(),
    getUserData(),
    getProductData(),
  ]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sale"
        subtitle={`${formatNumber(saleData.numberofsale)} Oder`}
        body={formatCurrency(saleData.amount)}
      ></DashboardCard>
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          userData.averageValuePerUser
        )} Average Value Per User`}
        body={formatNumber(userData.userCount)}
      ></DashboardCard>
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(productData.inactiveCount)} Inactive`}
        body={formatNumber(productData.activeCount)}
      />
    </div>
  );
}

function DashboardCard({ title, subtitle, body }: DashBoradCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  );
}
