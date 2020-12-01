import React, { Fragment } from "react";
import { connect } from "react-redux";
import { setDetailedProfile } from "../../actions";
import { ProfilePhoto } from "../ProfilePhoto";
import { Contact } from "../Contact";
import { Container } from "./styles";
import { ProfileSection } from "../ProfileSection";
import { AiFillCloseCircle } from "react-icons/ai";

const DetailedProfileComponent = ({
  isDetailedProfile,
  setDetailedProfile,
}) => {
  const handleClose = () => {
    setDetailedProfile(false);
  };
  return (
    <Fragment>
      {isDetailedProfile && (
        <Container>
          <AiFillCloseCircle onClick={handleClose} />
          <ProfilePhoto />
          <Contact />
          {[1, 2, 3].map((profElem) => (
            <ProfileSection></ProfileSection>
          ))}
        </Container>
      )}
    </Fragment>
  );
};

const mapStateToProps = ({ isDetailedProfile }) => ({
  isDetailedProfile,
});

const matDispatchToProps = {
  setDetailedProfile,
};

export const DetailedProfile = connect(
  mapStateToProps,
  matDispatchToProps
)(DetailedProfileComponent);
