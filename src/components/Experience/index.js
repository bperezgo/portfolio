import React, { useState, useEffect, useRef } from "react";
import { ImgExperience } from "../ImgExperience";
import { Wrapper, Blind } from "./styles";

const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref.current]);

  return [ref, value];
};

export const Experience = () => {
  const [hoverRef, isHovered] = useHover();
  return (
    <Wrapper ref={hoverRef}>
      <ImgExperience />
      <Blind fixed={isHovered}>
        Persiana informativa
      </Blind>
    </Wrapper>
  );
};
