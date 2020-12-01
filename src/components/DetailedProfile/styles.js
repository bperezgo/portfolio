import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1em;
  bottom: 1em;
  left: 0;
  right: 0;
  padding: 1em;
  border: 1px solid #000000;
  background: white;
  border-radius: 1em;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  z-index: 11;
  & svg {
    position: absolute;
    top: -4px;
    right: 0px;
    font-size: 2em;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #D24648;
    cursor: pointer;
  }
`;
