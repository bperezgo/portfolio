import React from "react";
import { ImgWrapper, Img } from "./styles";
import { RowContainer } from "../RowContainer/styles";
import ImgProfile from "../../assets/min-profile.jpg";

const DEFAULT_IMAGE = ImgProfile;

export const ProfilePhoto = ({ cover = DEFAULT_IMAGE }) => {
  return (
    <RowContainer>
      <ImgWrapper>
        <Img src={cover} />
      </ImgWrapper>
    </RowContainer>
  );
};
