import React, { Fragment } from "react";
import { ProfilePhoto } from "../ProfilePhoto";
import { Contact } from "../Contact";
import { Container } from "./styles";
import { ProfileSection } from "../ProfileSection";
import { AiFillCloseCircle } from "react-icons/ai";

export const DetailedProfile = ({ show = false }) => {
  return (
    <Fragment>
      {show && (
        <Container>
          <AiFillCloseCircle />
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
