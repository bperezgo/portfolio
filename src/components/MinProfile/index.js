import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { setDetailedProfile } from "../../actions";
import { Wrapper, Img } from "./styles";
import ImgProfile from "../../assets/min-profile.jpg";

const MinProfileComponent = (props) => {
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

  const handleClick = (e) => {
    props.setDetailedProfile(true);
  };

  const onDragStart = (e) => {
    // console.log("e");
    // console.log(e);
    // console.log(e.dataTransfer);
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <Fragment>
      {showFixed && !props.isDetailedProfile && (
        <Wrapper
          onDragEnter={onDragStart}
          onDragLeave={onDragStart}
          fixed={showFixed}
          onClick={handleClick}
        >
          <Img src={ImgProfile} />
        </Wrapper>
      )}
    </Fragment>
  );
};

const matStateToProps = ({ isDetailedProfile }) => ({
  isDetailedProfile,
});

const mapDispatchToProps = {
  setDetailedProfile,
};

export const MinProfile = connect(
  matStateToProps,
  mapDispatchToProps
)(MinProfileComponent);
