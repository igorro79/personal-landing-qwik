// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { Image } from "@unpic/qwik";

import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { swiper } from "~/utils/swiper";

const coverImage =
  "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";

export default component$(() => {
  useVisibleTask$(() => {
    if (swiper) swiper?.init();
  });

  return (
    <>
      <section class="my-20">
        <div class="swiper mySwiper w-full">
          <div class="swiper-wrapper swiper-wrapper--init ">
            <div class="swiper-slide">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
              <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
              <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>

            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>

            <div class="swiper-slide">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
              <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
              <div class="swiper-lazy-preloader"></div>
            </div>

            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>

            <div class="swiper-slide ">
              <Image
                src={coverImage}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
          <div class="w-full h-10"></div>
          <div class="swiper-pagination"></div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div>
      </section>
    </>
  );
});