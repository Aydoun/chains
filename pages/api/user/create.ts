import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ message: 'Method not allowed' });

  const { username, email, passwordHash, avatarUrl, role } = req.body;

  try {
    const user = await prisma.user.create({
      data: { username, email, passwordHash, avatarUrl, role },
    });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user', details: error.message });
  }
}