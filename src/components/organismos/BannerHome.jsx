import styled from "styled-components";

import { Device } from "../../styles/breakpoints";

import { Btn1 } from "../moleculas/Btn1";


import { useRef } from "react";
import { flotararriba } from "../../styles/keyframes";
import { Icon } from "@iconify/react";
import { Lottieanimacion } from "../moleculas/Lottieanimacion";
import beer from "../../assets/beer.json";
import { PowerBy } from "../moleculas/PowerBy";
import { DataNivelesverdadbebida } from "../../utils/dataEstatica";
import { Spinner1, useNivelesStore } from "../../index";
import { useQuery } from "@tanstack/react-query";
export function BannerHome({ setState }) {
  const elementRef = useRef(null);
  const {mostrarNiveles,selectNiveles} = useNivelesStore()
  const {data,isLoading,error} = useQuery({
    queryKey:"mostrar niveles",queryFn:mostrarNiveles
  })

  const expandToFullScreen = () => {
    const element = elementRef.current;

    if (element) {
      if (element.requestFullscreen) {
        element.requestFullscreen();
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen();
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen();
      }
    }
  };
 

  const seleccionar = (p) => {
    selectNiveles(p);
    setState();
    expandToFullScreen();
  };
 
  if (error){
    return <span>error.. {error.message}</span>
  }
  return (
    <Container ref={elementRef}>
     
      <div className="subcontainer">
        <Lottieanimacion animacion={beer} alto="300" />
        <div className="titulo principal">
          <span>VERDAD</span>
          <span>o</span>
          <span className="bebida">BEBIDA</span>
        </div>
        <Contentselect>
          <span className="titulo">Selecciona un MODO</span>
          <Icon className="iconofuego" icon="fluent-emoji:eggplant" />
          <PowerBy />
        </Contentselect>
        <section className="contentniveles">
          {
            isLoading?(<Spinner1/>):( data.map((item, index) => {
              return (
                <Btn1
                  icono={item.icono}
                  color="rgba(0, 0, 0,0.5)"
                  key={index}
                  texto={item.nombre}
                  width="220px"
                  funcion={() => seleccionar(item)}
                  color1={item.color_1}
                  color2={item.color_2}
                />
              );
            }))
          }
         
        </section>
      </div>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;

  overflow: hidden;
  transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
  flex-direction: column;
  z-index: 1;
  /* 
  &:after {
    position: absolute;
    content: "";
    animation: ${flotararriba} 16s linear infinite;
    background-image: radial-gradient(circle, #2e3c51 2.1px, transparent 0);
    background-size: calc(14.2857142857% - 1px) 100px;
    background-position: 5px 0;
    padding-left: 1rem;
    padding-right: 1rem;
    width: 640px;
    height: 100%;
    @media (min-width: 640px) {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    @media (min-width: 768px) {
      padding-left: 3rem;
      padding-right: 3rem;
    }

    @media (min-width: 360px) {
      max-width: 360px;
    }

    @media (min-width: 400px) {
      max-width: 400px;
    }

    @media (min-width: 640px) {
      max-width: 640px;
    }

    @media (min-width: 768px) {
      max-width: 768px;
    }

    @media (min-width: 1024px) {
      max-width: 1024px;
    }

    @media (min-width: 1280px) {
      max-width: 1280px;
    }

    @media (min-width: 1536px) {
      max-width: 1536px;
    }
  }

  &:after {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
  } */

  .cuadros {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 0;
    transition: 0.6s;
  }
  .contentsvg {
    transition: cubic-bezier(0.4, 0, 0.2, 1) 0.6s;
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: -900px;
    opacity: 0;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  &:hover {
    .contentsvg {
      bottom: -400px;
      opacity: 1;
    }
    .cuadros {
      transform: rotate(37deg) rotateX(5deg) rotateY(12deg) rotate(3deg)
        skew(2deg) skewY(1deg) scaleX(1.2) scaleY(1.2);
      color: red;
    }
  }
  .subcontainer {
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    .titulo {
      width: 100%;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-weight: 700;

      position: relative;
      overflow: hidden;
      padding: 20px;
      &.principal {
        .bebida {
          font-family: "Architects Daughter", cursive;
          font-size: clamp(3rem, 3vw + 1rem, 10rem);
          line-height: 1;
          margin: 0;
          background-image: linear-gradient(#72f65a, #36e264);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }
      }
      .online {
        background-color: #8d889f;
        border-radius: 15px;
        padding: 8px;
      }
    }
    .contentniveles {
      padding-top: 20px;
      display: flex;
      gap: 20px;
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      @media ${Device.mobile} {
        width: 500px;
      }
    }
  }
`;
const Contentselect = styled.div`
  border: 1px solid rgba(156, 98, 255, 0.95);
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;

  background: rgb(0, 36, 8);
  background: linear-gradient(
    266deg,
    rgba(0, 36, 8, 1) 0%,
    rgba(255, 0, 179, 0.104) 0%,
    rgba(91, 31, 195, 0.5970763305322129) 61%,
    rgba(61, 30, 238, 0.253) 90%
  );
  .titulo {
    z-index: 1;
  }
  .iconofuego {
    position: absolute;
    right: -20px;
    font-size: 11rem;
    top: -20px;
    transform: rotate(-25deg);
  }
  @media ${Device.tablet} {
    width: 650px;
  }
`;
const Sombra = styled.span`
  width: 100%;
  height: 200px;
  position: absolute;
  top: 0;
  z-index: 10;
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
