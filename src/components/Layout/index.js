import React, { Fragment } from "react";
import { Navbar } from "../Navbar";

export const Layout = ({ children }) => (
  <Fragment>
    <Navbar />
    {children}
  </Fragment>
);
