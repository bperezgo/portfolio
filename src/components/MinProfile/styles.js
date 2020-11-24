import styled, { css } from "styled-components";
import { appearFromTop } from "../../styles/animation";

export const Wrapper = styled.div`
  position: fixed;
  top: 5px;
  left: 5px;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 0.2em solid #000;
  overflow: hidden;
  ${(props) =>
    props.fixed &&
    css`
      ${appearFromTop({ time: "300ms", from: "-25%", top: "40px" })}
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    `}
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover; //Para que la imagen se ajuste
  position: absolute;
  top: 0;
  width: 100%;
`;
