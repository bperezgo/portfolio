import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  height: auto;
  background: #13615e;
`;

export const Line = styled.div`
  max-width: 100%;
  margin: 1em 2em;
  height: 0.1em;
  background: #ffffff;
`;

export const Anchor = styled.a`
  color: inherit;
  cursor: pointer;
  text-decoration: none;
`;

export const SocialContainer = styled.div`
  width: 100%;
  display: flex;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 1em 0;
  & svg {
    font-size: 2em;
    margin: 0 0.2em;
  }
`;
