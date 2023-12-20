import { NextResponse as res } from "next/server";
import { NextApiRequest } from "next/types";
import { createUser, getUsers } from "@/prisma/queries";

export async function GET() {
  try {
    const users = await getUsers();

    return res.json(
      {
        ok: true,
        data: users,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest) {
  try {
    if (!req.body)
      return res.json({ message: "Empty request is invalid" }, { status: 401 });

    const { email = "", password = "", role } = req.body;
    if (!email || !password)
      return res.json(
        { message: "Empty required data should not be empty" },
        { status: 401 }
      );

    const newUser = await createUser({
      email,
      password,
      role: role || "client",
    });

    return res.json({ data: newUser }, { status: 201 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
