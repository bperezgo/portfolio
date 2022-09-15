import { NextApiRequest, NextApiResponse } from 'next';
import { Experience } from '@data/experience';

const findAll = (): Promise<Experience[]> => {
  return new Promise((resolve) => {
    const alt = 'green iguana';
    const url = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
    const experience = {
      contentMedia: {
        alt,
        url,
      },
      title: 'Lizard',
      description:
        'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    };
    resolve([experience, experience, experience]);
  });
};

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const experiences = await findAll();
  res.status(200).json(experiences);
}
