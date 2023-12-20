import type { NextApiRequest, NextApiResponse } from 'next';
import { createUser, getUsers } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const newUser = await createUser(req.body);
      res.status(201).json(newUser);
    } else if (req.method === 'GET') {
      const users = await getUsers();
      res.status(200).json(users);
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
