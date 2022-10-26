import React from "react";

import { Slide1, Slide2, Slide3, Slide4 } from "../../assets/image/indexSlide";

import HeroSlider, { Slide, MenuNav } from "hero-slider";

const Sliders = () => {
  return (
    <HeroSlider
      height={"80vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
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
