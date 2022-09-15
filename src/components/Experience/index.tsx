import React from 'react';
import Card from '@ui/Card';
import type { Experience as ExperienceType } from '@data/experience';

export const Experience = (props: ExperienceType) => (
  <Card {...props} callToActionMsg="See" />
);
