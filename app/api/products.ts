import type { NextApiRequest, NextApiResponse } from 'next';
import { createProduct, getProducts } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const newProduct = await createProduct(req.body);
      res.status(201).json(newProduct);
    } else if (req.method === 'GET') {
      const products = await getProducts();
      res.status(200).json(products);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
