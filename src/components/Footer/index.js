import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Section, SocialContainer, Anchor, Line } from "./styles";

export const Footer = () => (
  <Section>
    <footer>
      <div>
        <p>Marca personal</p>
      </div>
      <div>
        <p>Contactame</p>
      </div>
      <Line></Line>
      <SocialContainer>
        <Anchor href="#">
          <FaGithub />
        </Anchor>
        <Anchor href="#">
          <FaInstagram />
        </Anchor>
        <Anchor href="#">
          <FaLinkedin />
        </Anchor>
      </SocialContainer>
    </footer>
  </Section>
);
