import prisma from '../../../lib/prisma';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'DELETE') return res.status(405).json({ message: 'Method not allowed' });

  const { id } = req.query;

  try {
    await prisma.collection.delete({
      where: { id: parseInt(id as string, 10) },
    });
    res.status(200).json({ message: 'Collection deleted successfully' });
  } catch (error) {
    if (error instanceof Error)
      res.status(500).json({ error: 'Error deleting Collection', details: error.message });
  }
}