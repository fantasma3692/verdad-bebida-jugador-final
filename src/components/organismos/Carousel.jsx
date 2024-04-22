import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import img1 from "../../assets/1.svg";
import Arrow from "../../assets/3.svg";
import { Device } from "../../styles/breakpoints";
import { Icon } from "@iconify/react/dist/iconify.js";
import { iconoanimado, movearrow, scaleup } from "../../styles/keyframes";
export function Carousel({ text, bgcolor1, bgcolor2, icono,stateAnimacion }) {
  return (
    <Container $bgcolor1={bgcolor1} $bgcolor2={bgcolor2} $stateAnimacion={stateAnimacion}>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        modules={[
          EffectCards,
          Navigation,
          Pagination,
          Scrollbar,
          A11y,
          Autoplay,
        ]}
        navigation={true}
        pagination={{ type: "fraction" }}
        scrollbar={{ draggable: true }}
        effect={"cards"}
      >
        <SwiperSlide className="contenttext">
          <Icon className="contenticon" icon={icono} />

          <span className="pregunta">{text}</span>
         

          <div className="containerarrow">
            <a data-scroll href="#tutorial">
              <div className="chevron"></div>
              <div className="chevron"></div>
              <div className="chevron"></div>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </Container>
  );
}
const Container = styled.div`
  width: 90%;
  height: 70vh;

  .contenttext {
    position: relative;
    padding: 15px;
    .pregunta {
      animation: ${(props) => props.$stateAnimacion &&  scaleup } 0.4s;
    }
    .contenticon {
      position: absolute;
      top: -6px;
      font-size: 8rem;
      left: 10px;
      animation: ${iconoanimado} 0.4s linear both;
    }
    .containerarrow {
      position: absolute;
      bottom: 50px;
      width: 24px;
      height: 24px;
      .chevron {
        position: absolute;
        width: 28px;
        height: 8px;
        opacity: 0;
        transform: scale3d(0.5, 0.5, 0.5);
        animation: ${movearrow} 3s ease-out infinite;
      }
      .chevron:first-child {
        animation: ${movearrow} 3s ease-out 1s infinite;
      }
      .chevron:nth-child(2) {
        animation: ${movearrow} 3s ease-out 2s infinite;
      }

      .chevron:before,
      .chevron:after {
        content: " ";
        position: absolute;
        top: 0;
        height: 100%;
        width: 51%;
        background: #fff;
      }

      .chevron:before {
        left: 0;
        transform: skew(0deg, 30deg);
      }

      .chevron:after {
        right: 0;
        width: 50%;
        transform: skew(0deg, -30deg);
      }
    }

    &::before {
      content: "";
      display: block;
      width: 250px;
      height: 250px;
      background-color: rgba(251, 251, 251, 0.25);
      position: absolute;
      border-radius: 50%;
      top: -105px;
      left: -80px;
    }
    &::after {
      content: "";
      display: block;
      width: 180px;
      height: 180px;
      background-color: rgba(251, 251, 251, 0.25);
      position: absolute;
      border-radius: 50%;
      bottom: -105px;
      right: -80px;
    }
  }
  @media ${Device.tablet} {
    width: 400px;
  }

  .swiper {
    width: 100%;
    height: 100%;
  }
  .swiper-slide {
    background-image: linear-gradient(
      222deg,
      ${(props) => props.$bgcolor1} 0%,
      ${(props) => props.$bgcolor2} 100%
    );
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      display: block;
      width: 100%;
      height: auto;
      object-fit: cover;
    }
  }
  .swiper-button-next {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
  .swiper-button-prev {
    color: ${(props) => props.theme.text};
    right: 0;
    width: 4rem;
    top: 60%;
    background-image: url(${Arrow});
    background-position: center;
    background-size: cover;
    transform: rotate(180deg);
    &:after {
      display: none;
    }
    @media (max-width: 64em) {
      width: 3rem;
    }
    @media (max-width: 30em) {
      width: 2rem;
    }
  }
`;
