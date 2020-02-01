import { css } from '@emotion/core';

export default css`
  width: 30rem;
  padding: 1rem;
  box-shadow: 0rem 1rem 1rem 2px #ccc;
  cursor: pointer;
  .logo {
    display: flex;
    justify-content: center;
    height: 14rem;
    img {
      max-width: 100%;
      height: 100%;
    }
  }
  .content {
    margin-top: 1rem;
    display: flex;
    justify-content: space-evenly;
    .name {
      margin-left: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-content: center;
      h3 {
        text-align: center;
        font-size: 2rem;
        font-weight: normal;
        margin: 0;
      }
    }

    img {
      width: 8em;
    }
  }
`;
