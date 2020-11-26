import styled, { css } from "styled-components";
import { appearFromOneSide } from "../../styles/animation";

export const Container = styled.div`
  background: rgba(73, 175, 206, 0.8);
  position: absolute;
  top: 0;
  bottom: 0;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 300ms;
  ${props => props.fixed ? "left:0" : "left: -70vw"};
  & div.individual-persian {
    position: absolute;
    // background: rgba(73, 175, 206, 0.5);
    left: 0;
    width: 50%;
    top: 0;
    bottom: 0;
  }
`;

export const Content = styled.div`
  display: flex;
  line-height: 1.5em;
  margin: 0 1em;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-family: Roboto;
  color: rgba(255, 255, 255, 0.8);
`;

export const Title = styled.h3`
  text-decoration: underline;
  // text-shadow: 0 .1em .1em #000000;
`;

export const Paragraph = styled.p`
  font-style: italic;
  // text-shadow: 0 .1em .1em #000000;
`;

/*export const Blind = styled.div`
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
`;*/
