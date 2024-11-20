import prisma from '../../../lib/prisma';

export default async function handler(req, res) {
    if (req.method !== 'GET') return res.status(405).json({ message: 'Method not allowed' });
  
    const { id } = req.query;
    console.log({query: req.query})
    try {
      const user = await prisma.user.findUnique({
        where: { id: parseInt(id, 10) },
        include: { Collection: true, BrowsingHistory: true, UserLibrary: true },
      });
      if (!user) return res.status(404).json({ message: 'User not found' });
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Error fetching user', details: error.message });
    }
  }