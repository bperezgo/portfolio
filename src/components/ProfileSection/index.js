import React from 'react';
import { RowContainer } from '../RowContainer/styles';

export const ProfileSection = ({
  nameSection = 'Nombre de la sección',
  description = '',
  items = [1, 2, 3],
}) => {
  return (
    <RowContainer>
      <div>{nameSection}</div>
      <div>{description}</div>
      {items.map((item, key) => (
        <div key={key}>Item</div>
      ))}
    </RowContainer>
  );
};
