import React, { Fragment, useState } from 'react';
import Image from 'next/image';
import { Header, Nav, Icon, Link, LogoContainer } from './styles';
import Logo from '../../assets/cropped_logo.png';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <Fragment>
      <Header>
        <LogoContainer>
          <Image src={Logo} alt="logo" objectFit='contain' />
        </LogoContainer>
        <Icon icon="menu" onClick={handleActive} />
        <Nav isActive={isActive}>
          <ol>
            <li>
              <Link href={'#'}>Contact</Link>
            </li>
          </ol>
        </Nav>
      </Header>
    </Fragment>
  );
};
