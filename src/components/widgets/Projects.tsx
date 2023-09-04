// import Swiper and modules styles
import { ChevronRight } from "~/components/icons/ChevronRight";
import { ChevronLeft } from "~/components/icons/ChevronLeft";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// import { Image } from "@unpic/qwik";

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
      <section id="projects" class="my-20 ">
        <div class="swiper mySwiper w-full">
          <div class="swiper-wrapper swiper-wrapper--init ">
            <div class="swiper-slide">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/png"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
              {/* <Image
                src={coverImage1}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>
            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
              {/* <Image
                src={coverImage1}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>
            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
              {/* <Image
                src={coverImage1}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>

            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
              {/* <Image
                src={coverImage1}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>

            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
              {/* <Image
                src={coverImage1}
                layout="constrained"
                width={500}
                height={500}
                alt="Qwind Hero Image (Cool dog)"
                class="rounded-md mx-auto"
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>

            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
            </div>

            <div class="swiper-slide ">
              <picture>
                <source
                  media="(min-width:820px)"
                  type="image/webp"
                  srcSet={coverImage}
                />
                <source
                  media="(min-width:820px)"
                  type="image/jpeg"
                  srcSet={coverImage}
                />

                <img
                  class="h-auto w-full border-dark xl:max-w-[390px] 2xl:w-[390px]"
                  width={500}
                  height={697}
                  srcSet={coverImage}
                  src={coverImage}
                  alt="Man"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>
          <div class="w-full h-10"></div>
          <div class="swiper-pagination"></div>

          <div class="swiper-custom-button swiper-custom-button--prev">
            <ChevronLeft />
          </div>
          <div class="swiper-custom-button swiper-custom-button--next">
            <ChevronRight />
          </div>
        </div>
      </section>
    </>
  );
});
