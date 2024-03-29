import React from 'react';
import { ListOfExperiences } from '@components/ListOfExperiences';
import { MinProfile } from '@components/MinProfile';
import { DetailedProfile } from '@components/DetailedProfile';

export default function Home() {
  return (
    <>
      <DetailedProfile show={false} />
      <MinProfile />
      <ListOfExperiences />
    </>
  );
}
