// @flow
import { css } from '@emotion/core';

export default css`
  margin: 1rem;
  height: 33rem;
  width: 24rem;
  img:hover {
    transform: scale(1.1);
    transition-property: transform;
    transition-duration: 1s;
  }

  .backLink {
    font-size: 50rem;
  }
`;
