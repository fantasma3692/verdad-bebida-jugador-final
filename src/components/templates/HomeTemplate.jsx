import styled from "styled-components";
import { BannerHome, PantallaPlayVerdadBebida } from "../../index";
import { useState } from "react";
import { flotararriba } from "../../styles/keyframes";
import fondo from "../../assets/pattern-1.svg";
export function HomeTemplate() {
  const [state, setState] = useState(true);
  
  return (
    <Main>
      <Sombra />
      {state ? (
        <BannerHome  setState={() => setState(!state)} />
      ) : (
        <PantallaPlayVerdadBebida  setState={() => setState(!state)} />
      )}
    </Main>
  );
}
const Main = styled.main`
  --tw-bg-opacity: 1;
  height: 100vh;
  width: 100%;
  background-color: rgb(16 21 29 / var(--tw-bg-opacity));
  color: ${({ theme }) => theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  font-size: 26px;

  &::after {
    position: absolute;
    content: "";
    svg {
      path{
        color: red;
      fill: red;
      }
      
    }

    background-size: 600px 600px, cover;
    animation: ${flotararriba} 20s linear infinite;
    background-image: url(${fondo});

    width: 640px;
    height: 100%;
  }

  &:after {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  }
`;
const Sombra = styled.span`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;

  background-image: radial-gradient(
    200px 100px at 50%0,
    #131f33 20%,
    rgba(19, 30, 49, 0) 100%
  );
  @media (min-width: 768px) {
    background-image: radial-gradient(
      500px 200px at 50%0,
      #131f33 20%,
      rgba(19, 30, 49, 0) 100%
    );
  }
`;
