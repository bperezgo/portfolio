import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Experience } from '../Experience';
import type { Experience as ExperienceType } from '@data/experience';

export const ListOfExperiences = () => {
  const [experiences, setExperiences] = useState<ExperienceType[]>([]);

  async function getExperiences() {
    const res = await fetch('/api/experiences');
    const data = await res.json();
    setExperiences(data);
  }
  // TODO: use getServerSideProps or getStaticProps
  useEffect(() => {
    getExperiences();
  }, []);
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(15rem, 1fr))',
        gap: '1rem',
        padding: '0.5rem',
      }}
    >
      {experiences.map((exp, key) => (
        <Experience key={key} {...exp} />
      ))}
    </Box>
  );
};
