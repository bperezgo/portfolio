import React, { useState, useEffect } from 'react';
import { Wrapper } from './styles';
import Image from 'next/image';
import ImgProfile from '../../assets/min-profile.jpg';

export const MinProfile = () => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = () => {
        const newShowFixed = window.scrollY > 40;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener('scroll', onScroll);
      return () => document.removeEventListener('scroll', onScroll); // Esto para limpiar el efecto
      // y evitar fugas de memoria
    },
    [showFixed]
  );

  const onDragStart = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      {showFixed && (
        <Wrapper
          onDragEnter={onDragStart}
          onDragLeave={onDragStart}
          fixed={showFixed}
        >
          <Image
            src={ImgProfile}
            alt="img-profile"
            layout="fill"
            objectFit="cover"
            style={{ height: '100%', width: 'auto', margin: '0' }}
          />
        </Wrapper>
      )}
    </>
  );
};
