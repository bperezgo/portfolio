import { NextApiRequest, NextApiResponse } from 'next';
import { Experience } from '@data/experience';

const findAll = async (): Promise<Experience[]> => {
  const res = await fetch(`${process.env.PORTFOLIO_BACKEND_HOST}/experiences`);
  const { data: experiences }: { data: Experience[] } = await res.json();
  return experiences;
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const experiences = await findAll();
  res.status(200).json(experiences);
}
