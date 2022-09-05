import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  position: relative
}

button {
  border: none;
  background-color: transparent;  
  padding: 0;
  cursor: pointer;
  outline: none;

  &:disabled {
    cursor: not-allowed;
  }
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

p {
  margin: 0;
}

textarea, input {
    font-family: 'Inter', sans-serif;
    outline: none;
}
::-webkit-input-placeholder {
    font-family: 'Inter', sans-serif;
}
:-moz-placeholder {
    font-family: 'Inter', sans-serif;
}
::-moz-placeholder {
    font-family: 'Inter', sans-serif;
}
:-ms-input-placeholder {
    font-family: 'Inter', sans-serif;
}
`;

export default GlobalStyle;
