import { component$ } from "@builder.io/qwik";
import ContactForm from "../feature/ContactForm";

export default component$(() => {
  // const redGradientStyle =
  //   "relative overflow-hidden to-transparent before:absolute before:top-[46px]  before:right-0  before:h-[130px]  before:w-[130px] before:translate-x-[24%]  before:bg-gradient-radial before:from-main  before:blur-[45px]  before:content-[''] lg:before:top-[25px]  lg:before:h-[200px]  lg:before:w-[200px] lg:before:translate-x-[24%]  lg:before:blur-[80px]  xl:before:top-[256px] xl:before:h-[300px]  xl:before:w-[300px] xl:before:translate-x-[14%]  xl:before:blur-[80px]  2xl:before:top-[180px]  2xl:before:h-[350px] 2xl:before:w-[350px]  2xl:before:translate-x-[24%]";

  return (
    // dark:bg-none  ${redGradientStyle}
    <section id="contact" class={`form `}>
      <div class="container px-4 sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div id="mainFormWrapper">
          {/* <ContactForm /> */}
          <div>
            <h2 class="m-0 pb-[62px] text-4xl font-bold uppercase leading-[1.4] text-white lg:pb-[44px]  lg:text-4xl lg:tracking-[1px] xl:pb-[33px] xl:text-[40px] xl:leading-[59px] xl:tracking-[0px] 2xl:pb-[50px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-[0px]">
              Let's get down to business
            </h2>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
});
