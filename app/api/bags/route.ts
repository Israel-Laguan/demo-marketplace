import { NextResponse as res } from "next/server";
import { NextApiRequest } from "next/types";
import { createBag, getBags } from "@/prisma/queries";

export async function GET() {
  try {
    const bags = await getBags();

    return res.json(
      {
        ok: true,
        data: bags,
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

    const { userId = "" } = req.body;
    if (!userId)
      return res.json(
        { message: "Empty userId should not be empty" },
        { status: 401 }
      );

    const newBag = await createBag({ userId });

    return res.json({ data: newBag }, { status: 201 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
