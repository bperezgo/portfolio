import React, { Fragment, useState } from 'react';
import { Header, Nav, Icon } from './styles';

export const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const handleActive = () => {
    setIsActive(!isActive);
  };
  return (
    <Fragment>
      <Header>
        <Icon icon="menu" onClick={handleActive} />
        <div>
          <p>Logo</p>
        </div>
        <Nav isActive={isActive}>
          <ol>
            {/* <li>
              <Link to={"#"}>Experiencia</Link>
            </li>
            <li>
              <Link to={"#"}>Portafolio</Link>
            </li> */}
          </ol>
        </Nav>
      </Header>
    </Fragment>
  );
};
