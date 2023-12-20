import type { NextApiRequest } from "next";
import { NextResponse as res } from "next/server";
import { getBags, updateBag, deleteBag } from "@/prisma/queries";

export async function GET(
  _req: NextApiRequest,
  { params: { id: bagId } }: { params: { id: string } }
) {
  try {
    if (!bagId) {
      return res.json({ message: "Missing bag ID" }, { status: 400 });
    }

    if (typeof bagId !== "string")
      return res.json(
        { message: "BagId param should be unique" },
        { status: 400 }
      );

    const bag = await getBags({ id: bagId });
    if (!bag) {
      return res.json({ message: "Bag not found" }, { status: 404 });
    }
    return res.json({ data: bag }, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextApiRequest,
  { params: { id: bagId } }: { params: { id: string } }
) {
  try {
    if (!bagId) {
      return res.json({ message: "Missing bag ID" }, { status: 400 });
    }

    if (typeof bagId !== "string")
      return res.json(
        { message: "BagId param should be unique" },
        { status: 400 }
      );

    const updatedBag = await updateBag(bagId, req.body);

    return res.json({ data: updatedBag }, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextApiRequest,
  { params: { id: bagId } }: { params: { id: string } }
) {
  try {
    if (!bagId) {
      return res.json({ message: "Missing bag ID" }, { status: 400 });
    }

    if (typeof bagId !== "string")
      return res.json(
        { message: "BagId param should be unique" },
        { status: 400 }
      );

    await deleteBag(bagId);
    return res.json({ message: "Bag deleted" }, { status: 204 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
