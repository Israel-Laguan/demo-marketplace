import { prisma } from "@/prisma/queries";
import { User } from "@/prisma/models";
import { validatePassword } from "./cryptoService";

const authenticate = async (email: string, password: string): Promise<{ user: User; } | null> => {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return null;
    }

    const isPasswordValid = await validatePassword(password, user.password);

    if (!isPasswordValid) {
      return null;
    }

    return { user };
  } catch (error) {
    console.error(error);
    throw new Error('Authentication failed');
  } finally {
    await prisma.$disconnect();
  }
};

export { authenticate };
