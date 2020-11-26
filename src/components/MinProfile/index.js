import React, { Fragment, useState, useEffect } from "react";
import { Wrapper, Img } from "./styles";
import ImgProfile from "../../assets/min-profile.jpg";

export const MinProfile = () => {
  const [showFixed, setShowFixed] = useState(false);

  useEffect(
    function () {
      const onScroll = (e) => {
        const newShowFixed = window.scrollY > 40;
        showFixed !== newShowFixed && setShowFixed(newShowFixed);
      };

      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll); // Esto para limpiar el efecto
      // y evitar fugas de memoria
    },
    [showFixed]
  );

  const onDragStart = (e) => {
    console.log("e");
    console.log(e);
    console.log(e.dataTransfer);
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <Fragment>
      {showFixed && (
        <Wrapper onDragEnter={onDragStart} onDragLeave={onDragStart} fixed={showFixed}>
          <Img src={ImgProfile} />
        </Wrapper>
      )}
    </Fragment>
  );
};
