import styled from "styled-components";

export const ImgWrapper = styled.div`
  position: relative;
  width: 7em;
  height: 7em;
  border-radius: 50%;
  border: 0.2em solid #000;
  overflow: hidden;
`;

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.2);
  height: 100%;
  object-fit: cover; //Para que la imagen se ajuste
  position: absolute;
  top: 0;
  width: 100%;
`;
