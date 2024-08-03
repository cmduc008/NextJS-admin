import data from "@/db/db";
import { User } from "@prisma/client";

export async function getSalesData() {
  const dataimport = data.products.aggregate({
    _sum: { Price: true },
    _count: true,
  });

  return {
    amount: ((await dataimport)._sum.Price || 0) / 100,
    numberofsale: (await dataimport)._count || 0,
  };
}
export async function getProductData() {
  const [activeCount, inactiveCount] = await Promise.all([
    data.products.count({ where: { isAvaiableforPurchase: true } }),
    data.products.count({ where: { isAvaiableforPurchase: false } }),
  ]);

  return { activeCount, inactiveCount };
}

export async function getUserData() {
  const [userCount, orderData] = await Promise.all([
    data.user.count(),
    data.oder.aggregate({
      _sum: { Price: true },
    }),
  ]);

  return {
    userCount,
    averageValuePerUser:
      userCount === 0 ? 0 : (orderData._sum.Price || 0) / userCount / 100,
  };
}
