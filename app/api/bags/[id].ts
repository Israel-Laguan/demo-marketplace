import type { NextApiRequest, NextApiResponse } from 'next';
import { getBags, updateBag, deleteBag } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const bagId = req.query.id;

  if (!bagId) {
    return res.status(400).json({ message: 'Missing bag ID' });
  }

  try {
    if (req.method === 'GET') {
      if (typeof bagId !== 'string') return res.status(400).json({ message: 'BagId param should be unique' });
      
      const bag = await getBags({ id: bagId });
      if (!bag) {
        return res.status(404).json({ message: 'Bag not found' });
      }
      res.status(200).json(bag);
    } else if (req.method === 'PUT') {
      if (typeof bagId !== 'string') return res.status(400).json({ message: 'BagId param should be unique' });
      
      const updatedBag = await updateBag(bagId, req.body);
      res.status(200).json(updatedBag);
    } else if (req.method === 'DELETE') {
      if (typeof bagId !== 'string') return res.status(400).json({ message: 'BagId param should be unique' });
      
      await deleteBag(bagId);
      res.status(204).json({ message: 'Bag deleted' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
