import React from "react";
import { Wrapper } from "./styles";

export const Contact = ({
  name = "Nombre Completo",
  phoneNumber = "(+57) 300 xxx xxxxx",
  email = "email@email.com",
}) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <h4>
        <trong>Celular:</trong> {phoneNumber}
      </h4>
      <h4>
        <trong>Correo:</trong> {email}
      </h4>
    </Wrapper>
  );
};
