import { Prisma, PrismaClient } from "@prisma/client";
import { initialProducts } from "./productData";
import { initialUsers } from "./usersData";
import { hashPassword } from "../services/cryptoService";

const prisma = new PrismaClient();

const hashUsersPassword = async (users: Prisma.UserCreateManyInput[]) => {
  const hashedUsersPasswords = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await hashPassword(user.password).catch(
        (error) => {
          throw Error(error);
        }
      );
      const updatedUser = {
        ...user,
        password: hashedPassword,
      };
      return updatedUser;
    }) as Promise<Prisma.UserCreateManyInput>[]
  );
  return hashedUsersPasswords;
};

async function main() {
  await prisma.product.createMany({
    data: initialProducts,
  });
  const users = await hashUsersPassword(initialUsers);

  if (users.length < 1)
    throw Error("Hashing passwords failed, please try again");
  await prisma.user.createMany({
    data: users,
  });

  const clientId1 = await prisma.user.findUnique({
    where: { email: "client1@quiet-lux.com" },
    select: { id: true },
  });

  if (!clientId1?.id) throw Error("Client needed is not found");

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
