import { PrismaClient } from "@prisma/client";
import { initialProducts } from "./productData";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: initialProducts
  });
  await prisma.user.createMany({
    data: [
      {
        email: "admin@quiet-lux.com",
        password: "securepassword",
        role: "admin",
      },
      {
        email: "client1@quiet-lux.com",
        password: "client1password",
        role: "client",
      },
      {
        email: "client2@quiet-lux.com",
        password: "client2password",
        role: "client",
      },
    ],
  });

  const clientId1 = await prisma.user.findUnique({
    where: { email: "client1@quiet-lux.com" },
    select: { id: true },
  });

  if (!clientId1?.id) return;

  const productIds = await prisma.product.findMany({
    select: { id: true },
    take: 4,
  });

  await prisma.bag.create({
    data: {
      userId: clientId1.id,
      isBuyCompleted: true,
      products: {
        connect: [{ id: productIds[0].id }, { id: productIds[1].id }],
      },
    },
  });

  await prisma.bag.create({
    data: {
      userId: clientId1.id,
      products: {
        connect: [{ id: productIds[2].id }, { id: productIds[3].id }],
      },
    },
  });

  console.log("Seeding complete!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error("Seeding error:", e);
    await prisma.$disconnect();
    process.exit(1);
  });
