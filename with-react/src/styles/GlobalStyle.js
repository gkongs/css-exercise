/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import reset from "./reset";

const breakPoints = [1000, 700];
const mq = bp => css`
  @media (max-width: ${bp[0]}px) {
    html {
      font-size: 50%;
    }
  }
  @media (max-width: ${bp[1]}px) {
    html {
      font-size: 30%;
    }
  }
`;

export const GlobalStyle = css`
  ${reset}

  html {
    font-size: 62.5%;
  }

  ${mq(breakPoints)}
`;
