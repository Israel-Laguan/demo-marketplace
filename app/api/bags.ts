import type { NextApiRequest, NextApiResponse } from 'next';
import { createBag, getBags } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const newBag = await createBag(req.body);
      res.status(201).json(newBag);
    } else if (req.method === 'GET') {
      const bags = await getBags();
      res.status(200).json(bags);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
