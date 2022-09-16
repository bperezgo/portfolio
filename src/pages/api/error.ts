import { NextApiRequest, NextApiResponse } from 'next';

export default async function errorHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405);
  }
  try {
    const { body } = req;
    const resApi = await fetch(`${process.env.PORTFOLIO_BACKEND_HOST}/errors`, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await resApi.json();
    res.status(data.statusCode).json({
      message: data.message,
    });
  } catch (err) {
    console.log('[ERROR] gotten error in error handler', err);
    res.status(500).json({
      message: 'something went wrong',
    });
  }
}
