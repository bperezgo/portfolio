import React from "react";
import { ImgWrapper, Img } from "./styles";

import DefaultImg from "../../assets/min-profile.jpg";

const DEFAULT_IMAGE = DefaultImg;

export const ImgExperience = ({ id = "1", src = DEFAULT_IMAGE }) => {
  return (
    <ImgWrapper>
      <Img src={src} />
    </ImgWrapper>
  );
};
