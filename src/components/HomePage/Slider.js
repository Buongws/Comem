import React from "react";

import { Slide1, Slide2, Slide3, Slide4 } from "../../assets/image/indexSlide";

import HeroSlider, { Slide, MenuNav } from "hero-slider";

const Sliders = () => {
  return (
    <HeroSlider
      height={"70vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
      }}
    >
      <Slide
        background={{
          backgroundImageSrc: Slide4,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: Slide2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: Slide3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: Slide1,
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
};

export default Sliders;
