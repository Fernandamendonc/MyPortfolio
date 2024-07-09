import styled, { createGlobalStyle } from 'styled-components'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export const GlobalStyle = createGlobalStyle`

.react-modal-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    z-index: 10000;

    background: rgba(0, 0, 0, 0.5);
  }

  .react-modal-content {
    width: 100%;
    max-width: 437px;

    background-color: black;
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;

    border-radius: 14px;
  }

:root {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  --purple-10: #B983FF;
  --purple-20: #8F01C2;
  --gray-20: #353237;
  --gray-10: #2B292D;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}


body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

textarea, input {
  font-family: 'Poppins';
  border: 1px solid #525252;
  background-color: var(--gray-10);

  border-radius: 8px;
}

textarea:focus,input:focus,
input:focus-visible, textarea:focus-visible {
  outline: 1px auto -webkit-focus-ring-color;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  font-size: 1em;
  font-weight: 500;
  font-family: 'Poppins';
  background-color: transparent;
  cursor: pointer;
  transition: border-color 0.25s;
}
/*button:hover {
  border-color: var(--purple-20);
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}*/

@media (prefers-color-scheme: light) {
  :root {
    color: #213547;
    background-color: #ffffff;
  }
  a:hover {
    color: #747bff;
  }
  button {
    background-color: #f9f9f9;
  }
}

`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Wrapper = styled.div`
  padding: 0px 72px;
`
