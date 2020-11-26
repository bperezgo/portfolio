import React, { Fragment } from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Navbar } from "./components/Navbar";
import { ListOfExperiences } from "./components/ListOfExperiences";
import { MinProfile } from "./components/MinProfile";
import { DetailedProfile } from "./components/DetailedProfile";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
      <DetailedProfile show={false}/>
      <MinProfile />
      <ListOfExperiences />
    </Fragment>
  );
};
