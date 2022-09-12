import styled, { css } from 'styled-components';
import { appearFromTop } from '@styles/animation';

// TODO: If props.fixed is false, define new animation
export const Wrapper = styled.div<{ fixed: boolean }>`
  position: fixed;
  top: 5px;
  left: 5px;
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 0.2em solid #000;
  padding: 0;
  overflow: hidden;
  z-index: 5;
  ${(props) =>
    props.fixed &&
    css`
      ${appearFromTop({ time: '300ms', from: '-25%', to: '40px' })}
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    `}
`;
