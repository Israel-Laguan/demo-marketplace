import type { NextApiRequest } from "next";
import { NextResponse as res } from "next/server";
import { getUsers, updateUser, deleteUser } from "@/prisma/queries";

export async function GET(
  _req: NextApiRequest,
  { params: { id: userId } }: { params: { id: string } }
) {
  try {
    if (!userId)
      return res.json({ message: "Missing User ID" }, { status: 400 });

    if (typeof userId !== "string")
      return res.json(
        { message: "userId param should be unique" },
        { status: 400 }
      );

    const bag = await getUsers({ id: userId });

    if (!bag) {
      return res.json({ message: "User not found" }, { status: 404 });
    }
    return res.json({ data: bag }, { status: 200 });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextApiRequest,
  { params: { id: userId } }: { params: { id: string } }
) {
  try {
    if (!userId) {
      return res.json({ message: "Missing user ID" }, { status: 400 });
    }

    if (typeof userId !== "string")
      return res.json(
        { message: "userId param should be unique" },
        { status: 400 }
      );

    const updatedBag = await updateUser(userId, req.body);

    return res.json({ data: updatedBag }, { status: 200 });
  } catch (error) {
    console.error(error);
    res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextApiRequest,
  { params: { id: userId } }: { params: { id: string } }
) {
  try {
    if (!userId) {
      return res.json({ message: "Missing bag ID" }, { status: 400 });
    }

    if (typeof userId !== "string")
      return res.json(
        { message: "userId param should be unique" },
        { status: 400 }
      );

    await deleteUser(userId);
    return res.json({ message: "Bag deleted" }, { status: 204 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
