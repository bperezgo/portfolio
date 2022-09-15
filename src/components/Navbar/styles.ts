import { styled } from '@mui/system';
import NextLink from 'next/link';
import { Menu } from '../../icons/Menu';

export const Header = styled('header')({
  display: 'flex',
  flexDirection: 'row',
  background: '#13615e',
  height: '50px',
});

export const Icon = styled(Menu)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  padding: 0.5em;
  background: rgba(19, 97, 94, 0.8);
  display: none;
  line-height: 40px;
  text-align: center;
  position: fixed;
  z-index: 11;
  right: 5px;
  top: 5px;
  color: white;
  cursor: pointer;
`;

export const Nav = styled('nav')<{ isActive: boolean }>(
  {
    position: 'fixed',
    background: 'rgba(68, 17, 120, 0.8)',
    top: 0,
    bottom: 0,
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'right 0.2s ease',
    zIndex: 10,
  },
  (props) => ({ right: props.isActive ? '0' : '-100vw' })
);

export const Link = styled(NextLink)`
  justify-content: center;
  height: 40px;
  font-size: 2em;
  text-decoration: underline;
  margin-bottom: 0.5em;
  color: white;
`;

export const LogoContainer = styled('div')({
  height: '100%',
  display: 'flex',
  width: '50%',
  position: 'relative',
  left: 0,
  top: 0,
});
