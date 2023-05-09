import { NextApiRequest, NextApiResponse } from 'next';
import { users } from './../../assets/resultsMock';

export default async function handler(req, res) {
  
  if (req.method === 'GET') {
    // Handle GET request
    const data = users;
    res.status(200).json(data);

  } else {
    // Return 405 Method Not Allowed for other HTTP methods
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}