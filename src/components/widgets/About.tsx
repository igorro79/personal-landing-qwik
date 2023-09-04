import { component$ } from "@builder.io/qwik";
import { Container } from "../core/Container";

export default component$(() => {
  return (
    <section
      id="about"
      class={`pt-[92px]  pb-[50px] dark:bg-gradient-to-b min-h-screen from-10% via-50% to-100% from-primary via-accentDark2  to-primary bg-none  2xl:pt-[160px] xl:h-screen  `}
    >
      <Container>
        <div class="flex justify-between relative z-10 items-center">
          <div class="leading-[1.8] font-medium mx-auto max-w-[400px] md:mr-0 md:w-1/2">
            <h2 class="mb-10 text-[clamp(20px,3vw,320px)]">About me</h2>
            <p class="mb-5 ">
              Evolving and attentive to details Front-End developer, able to
              effectively implement tasks of varying complexity.
            </p>
            <p class="mb-5">
              More than 1.5 years of commercial web application development
              experience.
            </p>
            <p>
              Specializes in React and JavaScript. Has basic knowledge of
              Angular, Vue.js and Qwik.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
});
