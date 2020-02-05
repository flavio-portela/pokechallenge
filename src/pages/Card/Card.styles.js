// @flow
import { css } from '@emotion/core';

export default css`
  .card {
    display: flex;
    max-width: 100rem;
    margin: 0 auto;
    .details {
      margin-left: 1rem;
      .name {
        display: flex;
        .type {
          margin-left: 1rem;
        }
      }
      .attacks {
        .attack {
          display: flex;
          p {
            font-size: 2rem;
          }
        }
      }
    }
  }
`;
