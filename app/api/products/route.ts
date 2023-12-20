import { NextResponse as res } from "next/server";
import { createProduct, getProducts } from "@/prisma/queries";
import { NextApiRequest } from "next/types";

export async function GET() {
  try {
    const products = await getProducts();

    return res.json({ data: products }, { status: 200 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(req: NextApiRequest) {
  try {
    if (!req.body)
      return res.json({ message: "Empty request is invalid" }, { status: 401 });

    const newProduct = await createProduct(req.body);
    return res.json({ data: newProduct }, { status: 201 });
  } catch (error) {
    console.error(error);
    return res.json({ message: "Internal server error" }, { status: 500 });
  }
}
