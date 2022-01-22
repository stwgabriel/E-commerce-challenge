import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

 * {

    box-sizing: border-box;
    font-family: 'ReadexPro', sans-serif;

    padding: 0;
    margin: 0;
  }

  &::-webkit-scrollbar {

    width: 1.2rem;
    height: 1rem;

    @media (max-width: 595px) {

      width: 0;
    }
  }
  &::-webkit-scrollbar-track {

    background: #f8f8f2;
  }
  &::-webkit-scrollbar-thumb {

    background: #0005;
    border-radius:1rem;
    border: solid .4rem #f8f8f2;

    &:hover {

      border: solid .1rem #f8f8f2;
    }
  }

  :root {

    font-size: 62.5%;
    font-weight: 400;

    max-height: 100vh;
    overflow: hidden;
  }

  #root {

    max-height: 100vh;
    overflow: auto;
  }

  body {

    background: #fafafa;
    color: #333;
    font-size: 1.6rem;
    text-shadow: 1px 1px 2px #0001;
  }

  .no-events {

    pointer-events: none;
  }

  a,
  button {

    cursor: pointer;
  }

  li {

    list-style: none;
  }
`;

export default GlobalStyle;
