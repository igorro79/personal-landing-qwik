import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

// const coverImage = "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";
// const coverImage = "https://p7.hiclipart.com/preview/122/843/764/robotics-industry-smart-robots-artificial-intelligence-robot-thumbnail.jpg";
// const coverImage = "https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png";



export default component$(() => {
  return (
    // bg-gradient-to-r from-sky-500 to-indigo-500
    <section class={`bg-gradient-to-r from-[#0d9fe1] to-[#202157] dark:bg-none mt-[-90px] md:h-screen 2xl:h-auto pt-[72px]`}>
      {/* md:flex */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6  ">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              {/* <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Robotics Artificial intelligence 
                
              </h1> */}
              {/*  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 */}
              <h1 class="text-6xl text-transparent bg-clip-text font-extrabold tracking-[1.5] lg:text-6xl 
              bg-gradient-to-r from-[#00242a] via-[#9c30fff0] to-[#ffffff]  drop-shadow lg:drop-shadow-[17px_20px_5px_rgba(0,0,0,0.5)]">
						Robotics Artificial intelligence 
              </h1>
            
              
              {/* <h2 class="mt-4 text-3xl lg:text-5xl text-white drop-shadow lg:drop-shadow-[17px_20px_5px_rgba(0,0,0,0.5)]">Tailwind CSS Responsive Text Shadow</h2> */}
             
            </div>
          </div>
          <div class="block md:flex items-center flex-1">
            <div class="relative m-auto max-w-4xl">
              <Image
                // src={coverImage}
                src="src/assets/images/robotics-industry-smart-02.png"
                layout="constrained"
                width={493}
                height={616}
                alt="Hero Image "
                // bg-gray-400 dark:bg-slate-700
                class="mx-auto w-full rounded-md md:h-full drop-shadow-2xl "
                breakpoints={[320, 480, 640, 1024]}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
