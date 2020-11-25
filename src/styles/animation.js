import { css, keyframes } from "styled-components";

const fadeInKeyFrames = keyframes`
from {
    filter: blur(5px);
    opacity: 0;
}

to {
    filter: blur(0);
    opacity: 1;
}
`;

export const fadeIn = ({ time = "1s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${fadeInKeyFrames} ${type};
  `;

const appearFromTopKeyFrames = (from, to) => {
  return keyframes`
          from {
              top: ${from}
          }
  
          to {
              top: ${to}
          }
      `;
};

export const appearFromTop = ({
  time = "1s",
  easing = "cubic-bezier(.18, .89, .32, 1.28)",
  from,
  to,
}) =>
  css`
    animation: ${time} ${appearFromTopKeyFrames(from, to)} ${easing},
      ${time} ${fadeInKeyFrames} ease;
  `;

const appearFromOneSideKeyFrames = (from, to) => {
  return keyframes`
    from {
      left: ${from}
    }
    to {
      left: ${to}
    }
  `;
};

export const appearFromOneSide = ({
  time = "1s",
  easing = "cubic-bezier(.18, .89, .32, 1.28)",
  from,
  to,
}) =>
  css`
    animation: ${time} ${appearFromOneSideKeyFrames(from, to)} ${easing} forwards;
  `;
