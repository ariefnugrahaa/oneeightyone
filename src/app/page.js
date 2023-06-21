"use client";
import { useEffect, useRef, React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  FreeMode,
} from "swiper";
import ItemSwiper from "./components/ItemSwiper";
import { register } from "swiper/element/bundle";
register();
import "swiper/swiper-bundle.css";

import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export default function Home() {
  useEffect(() => {}, []);

  let herokuData = [
    {
      title: "Bahrain ABC Bank",
      subtitle:
        "Illuminate the Future with Cutting-Edge LED Systems! Bahrain ABC Bank trusts us to bring brilliance to their building. Experience the benefits of our advanced LED systems today.",
      image: "/bahrain.png",
      video: "/video1.mp4",
    },
    {
      title: "Second Slide",
      subtitle:
        "Illuminate the Future with Cutting-Edge LED Systems! Bahrain ABC Bank trusts us to bring brilliance to their building. Experience the benefits of our advanced LED systems today.",
      image: "/led2.jpeg",
      video: "/video2.mp4",
    },
    {
      title: "Third Slide",
      subtitle:
        "Illuminate the Future with Cutting-Edge LED Systems! Bahrain ABC Bank trusts us to bring brilliance to their building. Experience the benefits of our advanced LED systems today.",
      image: "/led3.jpeg",
      video: "/video1.mp4",
    },
    {
      title: "Fourth Slide",
      subtitle:
        "Illuminate the Future with Cutting-Edge LED Systems! Bahrain ABC Bank trusts us to bring brilliance to their building. Experience the benefits of our advanced LED systems today.",
      image: "/led4.jpeg",
      video: "/video2.mp4",
    },
  ];

  return (
    <Swiper
      cssMode={true}
      modules={[Navigation, Pagination, A11y, Autoplay, Scrollbar, FreeMode]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      // autoplay
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {herokuData.map((data) => (
        <SwiperSlide>
          <ItemSwiper data={data} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
