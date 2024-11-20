import prisma from '../../lib/prisma';

export default async function handler(req, res) {
    if (req.method !== 'PUT') return res.status(405).json({ message: 'Method not allowed' });
  
    const { id } = req.query;
    const { username, email, avatarUrl, role } = req.body;
  
    try {
      const updatedUser = await prisma.user.update({
        where: { id: parseInt(id, 10) },
        data: { username, email, avatarUrl, role },
      });
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: 'Error updating user', details: error.message });
    }
  }