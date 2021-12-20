/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import reset from './reset';

const breakPoints = {
  tablet: 800,
  moblie: 480,
};

export const GlobalStyle = css`
  ${reset}

  html {
    font-size: 62.5%;
  }

  ${mq(breakPoints)}
`;

function mq(bp) {
  return css`
    @media screen and (max-width: ${bp.tablet}px) {
      html {
        font-size: 50%;
      }
    }

    @media screen and (max-width: ${bp.moblie}px) {
      html {
        font-size: 30%;
      }
    }
  `;
}
