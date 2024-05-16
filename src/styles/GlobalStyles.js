import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary-blue : #0ea5e9;
    --color-primary-gray : #d4d4d8;
    --color-secondary-gray : #e6e6e6;
  }

    *,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

}
body {
  font-family: 'Courier New', Courier, monospace;
  color: black;
}

input,
button,
textarea,
select {
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}

select:disabled,
input:disabled {
  background-color: var(--color-grey-200);
  color: var(--color-grey-500);
}

input:focus,
button:focus,
textarea:focus,
select:focus {
  outline: 2px solid var(--color-brand-600);
  outline-offset: -1px;
}

 

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
  hyphens: auto;
}

 
`;

export default GlobalStyles;
