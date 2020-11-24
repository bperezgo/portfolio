import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid #000000;
  height: 20em;
  margin: 1em;
  position: relative;
  overflow: hidden;
`;

export const Blind = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: -100vw;
  background: rgba(68, 17, 120, .8);
`;
