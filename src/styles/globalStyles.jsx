import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
    *{
  margin: 0;
  padding: 0;
  font-family: "Poppins", sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
*::-webkit-scrollbar {
  width: 12px;
  background: #000;
  filter: blur(10px);
}
*::-webkit-scrollbar-thumb {
  background: rgba(84, 84, 84, 0.5);
  border-radius: 10px;
  
}

`;
