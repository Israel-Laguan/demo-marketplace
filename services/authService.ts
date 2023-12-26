import { User } from "@/prisma/models";
import { validatePassword } from "./cryptoService";
import { getUsers } from "@/prisma/queries/userQueries";

const authenticate = async (
  email: string,
  password: string
): Promise<{ user: User } | null> => {
  try {
    const [user] = await getUsers({
      email
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
    throw new Error("Authentication failed");
  }
};

export { authenticate };
