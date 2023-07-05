import { noSerialize } from "@builder.io/qwik";
import Swiper from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";

// export const swiperThumb = noSerialize(

export const swiper = noSerialize(
  // export default noSerialize(
  new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow],
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },
    // Optional parameters
    // direction: "vertical",
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    // centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },

    autoplay: {
      delay: 1000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  })
);
