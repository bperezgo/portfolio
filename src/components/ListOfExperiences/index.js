import React, { Fragment } from "react";
import { Experience } from "../Experience";

export const ListOfExperiences = () => {
  return (
    <Fragment>
      {[1, 2, 3].map((exp, key) => (
        <Experience key={key}/>
      ))}
    </Fragment>
  );
};
