import { noSerialize } from "@builder.io/qwik";
import Swiper from "swiper";
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Navigation,
  Pagination,
} from "swiper/modules";

// export const swiperThumb = noSerialize(

export const swiper = noSerialize(
  // export default noSerialize(
  new Swiper(".mySwiper", {
    modules: [Navigation, Pagination, Autoplay, EffectCoverflow, EffectCube],
    effect: "coverflow",
    coverflowEffect: {
      rotate: 30,
      slideShadows: false,
    },

    // TODO added 3d
    // effect: 'cube',

    // cubeEffect: {
    //   slideShadows: true,
    //   shadow: true,
    //   shadowOffset: 20,
    //   shadowScale: 0.94
    // },
    // Optional parameters
    // direction: "vertical",
    // slidesPerView: 3,
    // TODO changes 07.07.2023
    
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },

    autoplay: {
      delay: 1500,
    },
    speed: 500,
    navigation: {
      nextEl: ".swiper-custom-button--next",
      prevEl: ".swiper-custom-button--prev",
    },


    breakpoints: {
      320: {
        slidesPerView: 1,

      },
      480: {
        slidesPerView: 2,

      },
      820: {
        slidesPerView: 3,

      },

    },

    a11y: {
      enabled: true,
      // message
      prevSlideMessage: 'Previous slide',
      nextSlideMessage: 'Next slide',
      firstSlideMessage: 'This is the first slide',
      lastSlideMessage: 'This is the last slide',
      paginationBulletMessage: 'Go to slide {{index}}',
      // notificationClass: 'swiper-notification',
      // containerMessage: '',
      // containerRoleDescriptionMessage: '',
      // itemRoleDescriptionMessage: '',
    }
  })
);
