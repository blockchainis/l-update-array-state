import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  button {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}
`;

export default GlobalStyle;
