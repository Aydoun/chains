import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'DELETE') return res.status(405).json({ message: 'Method not allowed' });

  const { id } = req.query;

  try {
    await prisma.user.delete({
      where: { id: parseInt(id, 10) },
    });
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Error deleting user', details: error.message });
  }
}