import React, { useState } from "react";
import { ImgExperience } from "../ImgExperience";
import { Wrapper } from "./styles";
import { Persian } from "../Persian";

export const Experience = () => {
  const [tap, setTap] = useState(false);
  const handleTap = () => {
    setTap(!tap);
  }
  return (
    <Wrapper
      onClick={handleTap}
    // ref={hoverRef}
    >
      <ImgExperience />
      <Persian fixed={tap} title="Título Persiana" content="Persiana informativa"></Persian>
    </Wrapper>
  );
};
