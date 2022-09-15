import { NextApiRequest, NextApiResponse } from 'next';

export default function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405);
  }
  console.log(req.body);
  res.status(202).json({
    message: 'accepted',
  });
}
