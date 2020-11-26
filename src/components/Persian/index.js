import React from "react";
import { Container, Content, Title, Paragraph } from "./styles";

export const Persian = ({
  title = "DEFAULT TITLE",
  content = "DEFAULT CONTENT",
  fixed,
}) => {
  return (
    <Container fixed={fixed}>
      <Content>
        <Title>{title}</Title>
        <Paragraph>{content}</Paragraph>
      </Content>
      <div className="individual-persian"></div>
      <div className="individual-persian"></div>
      <div className="individual-persian"></div>
    </Container>
  );
};
