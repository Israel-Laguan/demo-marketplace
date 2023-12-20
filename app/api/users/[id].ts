import type { NextApiRequest, NextApiResponse } from 'next';
import { getUsers, updateUser, deleteUser } from '@/prisma/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = req.query.id;

  if (!userId) {
    return res.status(400).json({ message: 'Missing user ID' });
  }

  try {
    if (req.method === 'GET') {
      if (typeof userId !== 'string') return res.status(400).json({ message: 'UserId param should be unique' });
      
      const user = await getUsers({ id: userId });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } else if (req.method === 'PUT') {
      if (typeof userId !== 'string') return res.status(400).json({ message: 'UserId param should be unique' });
      
      const updatedUser = await updateUser(userId, req.body);
      res.status(200).json(updatedUser);
    } else if (req.method === 'DELETE') {
      if (typeof userId !== 'string') return res.status(400).json({ message: 'UserId param should be unique' });
      
      await deleteUser(userId);
      res.status(204).json({ message: 'User deleted' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
