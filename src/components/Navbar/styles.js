import styled from "styled-components";
import { Link as LinkRouter } from "@reach/router";
import { Menu } from "../../icons/Menu";

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  background: #13615e;
  height: 50px;
`;

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

export const Nav = styled.nav`
  position: fixed;
  background: rgba(68, 17, 120, .8);
  top: 0;
  bottom: 0;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: right 0.2s ease;
  z-index: 10;
  right: ${(props) => (props.isActive ? "0" : "-100vw")};
`;

export const Link = styled(LinkRouter)`
  justify-content: center;
  height: 40px;
  font-size: 2em;
  text-decoration: underline;
  margin-bottom: 0.5em;
  color: white;
`;
