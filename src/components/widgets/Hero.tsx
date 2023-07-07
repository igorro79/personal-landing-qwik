import { component$, useContext, $ } from "@builder.io/qwik";
// import { Image } from "@unpic/qwik";
import { GlobalContext } from "~/root";
// import coverImage from "~/assets/images/robotics.png";
import coverImageMobile from "~/assets/images/robotics-320.png";
import coverImage from "~/assets/images/robotics.png";

// const coverImage = "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";
// const coverImage = "https://p7.hiclipart.com/preview/122/843/764/robotics-industry-smart-robots-artificial-intelligence-robot-thumbnail.jpg";

// const coverImage = "https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png";
// const coverImage = "https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png";

export default component$(() => {
  const context = useContext(GlobalContext);
  const openProfile = $(() => {
    context.modal = true;
    context.profile = true;
  });

  return (
    // bg-gradient-to-r from-sky-500 to-indigo-500  mt-[-90px] md:h-screen 2xl:h-auto
    <section
      class={`pt-[92px] pb-[50px] bg-gradient-to-br from-[#0d9fe1] to-[#202157] dark:bg-none  2xl:pt-[160px] xl:h-screen  `}
    >
      {/* md:flex */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6  ">
        {/* py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left */}
        {/* lg:grid-flow-col-dense */}
        <div class="sm:grid sm:grid-cols-[45%_55%] sm:grid-flow-row-dense sm:gap-8 xl:grid-cols-[75%_25%] xl:gap-0">
          {/* pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5 */}
           <div class=" mb-4 xl:pt-12 ">
              {/* <div class="w-max"> */}
              {/* whitespace-nowrap  tracking-[1.5]  leading-normal*/}
              {/* animate-typing */}
              <h1
                class="animate-typing  overflow-hidden   border-r-4 border-r-white pr-5 xl:whitespace-nowrap
                text-clampTitle   text-transparent bg-clip-text font-extrabold 
              bg-gradient-to-r from-[#00242a] via-[#9c30fff0] to-[#ffffff]  drop-shadow lg:drop-shadow-[17px_20px_5px_rgba(0,0,0,0.5)]"
              >
                Robotics Artificial intelligence
              </h1>
              {/* </div> */}
          </div>
          
          

          {/* lg:col-start-1 lg:row-span-1 */}
          <div class="mb-8 sm:col-start-1 xl:max-w-[600px]">
            {/* <div class=""> */}
            {/* <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Robotics Artificial intelligence                 
              </h1> */}
            {/*  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 */}

            {/* text-6xl lg:text-6xl*/}

            {/* flex items-center justify-start */}
           

            <p class="text-white mt-8 text-clampParagraph ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptates vero nostrum veritatis alias quibusdam repellendus
              tempore doloremque cumque sapiente eum laudantium modi quaerat
              omnis, quidem explicabo suscipit provident voluptatibus unde?
            </p>

            {/* <button type="button" onClick$={openProfile}>
            <IconUser />
          </button> */}

            <button
              type="button"
              onClick$={openProfile}
              class=" mt-12 rounded-full w-full lg:w-80  px-3.5 py-4 text-sm font-semibold text-white text-center shadow-sm  
                bg-gradient-to-r from-[#9f17ff] to-[#4d1bff]
               transition ease-in duration-150  hover:from-[#00ff8e] hover:to-[#47b595]
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Get started
            </button>
            {/* </div> */}
          </div>

          {/* flex-1 block md:flex items-center*/}
          {/* lg:col-start-2 lg:row-start-1 */}
          <div class="mb-4 sm:row-span-2 sm:col-start-2 lg:mb-8">
            {/* max-w-4xl */}
            <div class="relative  m-auto ">

              
                      <picture>
                        <source
                          media="(max-width:819px)"
                          type="image/png"
                          srcSet={coverImageMobile}
                        />
                        <source
                          media="(min-width:820px) and (max-width:1279px)"
                          type="image/png"
                          srcSet={coverImage}
                        />

                        <source
                          media="(min-width:1280px)"
                          type="image/png"
                          srcSet={coverImage}
                        />

                        <img
                  class="h-auto w-full border-dark xl:max-w-[300px] "
                  width={500}
                height={697}
                          srcSet={coverImageMobile}
                          src={coverImageMobile}
                          alt="Man"
                          loading="lazy"
                        />
                      </picture>

                     
              {/* <Image
                src={coverImage}
                // src="/images/robotics.png"
                layout="constrained"
                width={493}
                height={616}
                alt="Hero Image "
                placeholder="transparent"
                // bg-gray-400 dark:bg-slate-700
                class="mx-auto w-full rounded-md md:h-full drop-shadow-2xl "
                breakpoints={[320, 480, 640, 1024]}
              /> */}
            </div>
            </div>
            
           
        </div>

        <div class="grid grid-cols-3 gap-2 grid-flow-row-dense opacity-90">
          <div class="bg-red-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-orange-500 rounded-lg shadow-xl min-h-[14px] col-span-3"/>
          <div class="bg-yellow-500 rounded-lg shadow-xl min-h-[14px] row-span-2 col-span-2"/>
          <div class="bg-green-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-teal-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-blue-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-indigo-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-purple-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-pink-500 rounded-lg shadow-xl min-h-[14px]"/>
          <div class="bg-slate-500 rounded-lg shadow-xl min-h-[14px]"/>
        </div>
      </div>
    </section>
  );
});
