import React from 'react';
import Box from '@mui/material/Box';
import { Experience } from '../Experience';

export const ListOfExperiences = () => {
  const alt = 'green iguana';
  const url = 'https://mui.com/static/images/cards/contemplative-reptile.jpg';
  const props = {
    contentMedia: {
      alt,
      url,
    },
    title: 'Lizard',
    description:
      'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
    callToActionMsg: 'See',
  };
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        gap: '1rem',
        padding: '0.5rem',
      }}
    >
      {[1, 2, 3].map((exp) => (
        <Experience key={exp} {...props} />
      ))}
    </Box>
  );
};
