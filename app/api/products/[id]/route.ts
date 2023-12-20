import type { NextApiRequest } from "next";
import { NextResponse as res } from "next/server";
import { getProducts, updateProduct, deleteProduct } from "@/prisma/queries";

export async function GET(
  _req: NextApiRequest,
  { params: { id: productId } }: { params: { id: string } }
) {
  try {
    if (!productId) {
      return res.json({ message: "Missing product ID" }, { status: 400 });
    }

    if (typeof productId !== "string")
      return res.json(
        { message: "ProductId param should be unique" },
        { status: 400 }
      );

    const product = await getProducts({ id: productId });
    if (!product) {
      return res.json({ message: "Product not found" }, { status: 400 });
    }
    return res.json({ data: product }, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(
  req: NextApiRequest,
  { params: { id: productId } }: { params: { id: string } }
) {
  try {
    if (!productId) {
      return res.json({ message: "Missing product ID" }, { status: 400 });
    }

    if (typeof productId !== "string")
      return res.json(
        { message: "ProductId param should be unique" },
        { status: 400 }
      );

    const updatedProduct = await updateProduct(productId, req.body);
    return res.json({ data: updatedProduct }, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(
  _req: NextApiRequest,
  { params: { id: productId } }: { params: { id: string } }
) {
  try {
    if (!productId) {
      return res.json({ message: "Missing product ID" }, { status: 400 });
    }

    if (typeof productId !== "string")
      return res.json(
        { message: "ProductId param should be unique" },
        { status: 400 }
      );

    await deleteProduct(productId);
    return res.json({ message: "Product deleted" }, { status: 204 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
