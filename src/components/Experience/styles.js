import styled, { css } from "styled-components";
import { appearFromOneSide } from "../../styles/animation";

export const Wrapper = styled.div`
  border: 1px solid #000000;
  height: 20em;
  margin: 1em;
  position: relative;
  overflow: auto;
`;

export const Blind = styled.div`
  position: absolute;
  background: rgba(68, 17, 120, 0.8);
  top: 0;
  bottom: 0;
  left: -100vw;
  ${(props) =>
    props.fixed &&
    css`
      ${appearFromOneSide({
        time: "300ms",
        easing: "ease",
        from: "-100vw",
        to: "0",
      })}
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
      z-index: 4;
    `}
`;
