import styled, { keyframes } from "styled-components";
export const flotararriba = keyframes`
    0% {
        background-position: 50% 0,50%;
       
    }

    to {
        background-position: 50% 521px, 50%;
       
    }
    `;
export const iconoanimado = keyframes`
  0%{transform:scale(.5)} 100%{transform:scale(1)}
`;

export const movearrow = keyframes`
   25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
`;
export const scaleup = keyframes`
  0%{
    transform:scale(2.5);
    filter:blur(12px);
  } 
  
  100%{
    transform:scale(1);
    filter:blur(0px);
    } 
`;
