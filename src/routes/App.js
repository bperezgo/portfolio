import React, { Fragment } from "react";
import { Router } from "@reach/router";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Experiences } from "../containers/Experiences";

export const App = () => {
  return (
    <Fragment>
      <GlobalStyles />
      <Router>
        <Experiences path="/" />
      </Router>
    </Fragment>
  );
};
