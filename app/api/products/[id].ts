import type { NextApiRequest, NextApiResponse } from 'next';
import { getProducts, updateProduct, deleteProduct } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const productId = req.query.id;

  if (!productId) {
    return res.status(400).json({ message: 'Missing product ID' });
  }

  try {
    if (req.method === 'GET') {
      if (typeof productId !== 'string') return res.status(400).json({ message: 'ProductId param should be unique' });
      
      const product = await getProducts({ id: productId });
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(200).json(product);
    } else if (req.method === 'PUT') {
      if (typeof productId !== 'string') return res.status(400).json({ message: 'ProductId param should be unique' });
      
      const updatedProduct = await updateProduct(productId, req.body);
      res.status(200).json(updatedProduct);
    } else if (req.method === 'DELETE') {
      if (typeof productId !== 'string') return res.status(400).json({ message: 'ProductId param should be unique' });
      
      await deleteProduct(productId);
      res.status(204).json({ message: 'Product deleted' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}