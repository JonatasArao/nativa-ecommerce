import { css } from '@linaria/core';

export const globals = css`
  :global() {
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap');
    
    body {
      margin: 0;
      font-family: "Roboto Flex", sans-serif;
    }
    html {
      box-sizing: border-box;
    }
    body, h1, h2, h3, h4, p,
    figure, blockquote, dl, dd {
      margin-block-start: 0;
      margin-block-end: 0;
    }
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }

    .sr-only {
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
      clip: rect(0, 0, 0, 0);
      border-width: 0;
      white-space: nowrap;
    }
  }
`;
