import React, { useState } from "react";
import { ImgExperience } from "../ImgExperience";
import { Wrapper, Blind } from "./styles";

export const Experience = () => {
  const [hover, setHover] = useState(false);
  const hoverWrapper = () => {};
  return (
    <Wrapper
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ImgExperience />
      <Blind>Persiana informativa</Blind>
    </Wrapper>
  );
};
