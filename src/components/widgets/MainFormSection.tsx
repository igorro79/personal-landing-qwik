import { component$ } from "@builder.io/qwik";
import ContactForm from "../feature/ContactForm";
// import ContactForm from "~/feature/ContactForm";


export default component$(() => {
  const redGradientStyle =
    "relative overflow-hidden to-transparent before:absolute before:top-[46px]  before:right-0  before:h-[130px]  before:w-[130px] before:translate-x-[24%]  before:bg-gradient-radial before:from-main  before:blur-[45px]  before:content-[''] lg:before:top-[25px]  lg:before:h-[200px]  lg:before:w-[200px] lg:before:translate-x-[24%]  lg:before:blur-[80px]  xl:before:top-[256px] xl:before:h-[300px]  xl:before:w-[300px] xl:before:translate-x-[14%]  xl:before:blur-[80px]  2xl:before:top-[180px]  2xl:before:h-[350px] 2xl:before:w-[350px]  2xl:before:translate-x-[24%]";

  return (
    // dark:bg-none  ${redGradientStyle}
    <section
      class={`form lg:rounded-b-10 rounded-b-[30px] bg-gradient-to-r from-[#0d9fe1] to-[#202157]  pb-[50px] pt-8 lg:pb-[49px] lg:pt-[49px] xl:rounded-b-[50px] xl:pb-[58px] xl:pt-[41px] 2xl:pb-[58px] 2xl:pt-[90px] `}
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        <div id="mainFormWrapper" class="sticky">
          <div>
            <p class="mb-[26px] text-xs font-bold leading-4 text-middleGrey lg:mb-[17px] lg:leading-[140%] xl:hidden">
              GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
            </p>
          </div>

          <div>
            <h2 class="m-0 pb-[62px] text-4xl font-bold uppercase leading-[43px] text-white lg:pb-[44px] lg:pt-[2px] lg:text-4xl lg:tracking-[1px] xl:pb-[33px] xl:text-[40px] xl:leading-[59px] xl:tracking-[0px] 2xl:pb-[50px] 2xl:text-[64px] 2xl:leading-[64px] 2xl:tracking-[0px]">
              Let's promote your business
            </h2>
          </div>

          <div class="border-middleGrey xl:flex xl:border-t">
            <div class="mb-[26px] hidden lg:mb-[17px] xl:mr-5 xl:block xl:pt-[29px] 2xl:mr-[100px] 2xl:block 2xl:pt-[61px]">
              <p class="text-xs font-bold leading-4 text-middleGrey xl:max-w-[420px] xl:text-[12px] xl:leading-[23px] xl:tracking-[1px] 2xl:max-w-[300px] 2xl:text-base 2xl:leading-[24px]">
                GET A DETAILED AND COMPREHENSIVE COMMERCIAL PROPOSAL
              </p>
            </div>
            {/* <ContactForm /> */}
       
            <ContactForm variant="main" />

            <div class="z-10 lg:pt-[29px] xl:mb-10 xl:border-l xl:pl-[25px] xl:pt-[65px] 2xl:pl-[45px] 2xl:pr-[133px]">
              <a
                class="mb-5 block text-xs font-medium leading-6 text-white transition ease-in hover:text-main lg:mb-[24px] lg:text-base xl:mb-[37px] xl:max-w-[195px] 2xl:max-w-[282px]"
                href="https://www.google.com/maps/place/Önneköp+Per+Bings+väg,+Hörby/@55.7915365,13.8804572,17z/data=!3m1!4b1!4m6!3m5!1s0x46540b4437c38e67:0x7b18ebd38168a35a!8m2!3d55.7915365!4d13.8804572!16s%2Fg%2F1tf8rqbg"
                aria-label="our address"
              >
                Onnekop Per Bings vag 13B, 242 98 Horby, Sweden
              </a>
              <div class="lg:grid lg:grid-cols-2 xl:block">
                <div>
                  <a
                    class="mb-1 block text-xl font-semibold leading-[1.1] text-white transition ease-in hover:text-main lg:mb-[11px] lg:text-2xl lg:leading-[1.1] xl:mb-4 2xl:text-[32px] 2xl:leading-[1.1]"
                    href="mailto:info@uwp.digital"
                    aria-label="our email"
                  >
                    info@uwp.digital
                  </a>

                  <p class="mb-5 text-xs font-medium leading-6 tracking-[0.4px] text-middleGrey lg:text-base xl:mb-10 xl:text-base">
                    Shoot us a message
                  </p>
                </div>

                <div>
                  <a
                    class="mb-1 block whitespace-nowrap text-xl font-semibold leading-[1.1] text-white transition ease-in hover:text-main lg:mb-[11px] lg:text-2xl lg:leading-[1.1] xl:mb-4 xl:text-xl xl:leading-[1.1] 2xl:text-2xl 2xl:text-[32px] 2xl:leading-[1.1]"
                    href="tel:+323242344232"
                    aria-label="our phone"
                  >
                    +32 3242 34 42 32
                  </a>

                  <p class="text-xs font-medium leading-6 tracking-[0.4px] text-middleGrey lg:text-base xl:text-base">
                    Call us
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
