import React from "react";
import IcoMoon from "react-icomoon";
const iconSet = require("./selection.json");
 
export const Menu = ({ ...props }) => {
  return <IcoMoon iconSet={iconSet} {...props} />;
};
