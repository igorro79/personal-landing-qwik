import { component$ } from "@builder.io/qwik";
import { Image } from "@unpic/qwik";

// const coverImage = "https://images.unsplash.com/photo-1590767950092-42b8362368da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3087&q=80";
// const coverImage = "https://p7.hiclipart.com/preview/122/843/764/robotics-industry-smart-robots-artificial-intelligence-robot-thumbnail.jpg";
// const coverImage = "https://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png";



export default component$(() => {
  return (
    // bg-gradient-to-r from-sky-500 to-indigo-500  mt-[-90px]
    <section class={`bg-gradient-to-r from-[#0d9fe1] to-[#202157] dark:bg-none  md:h-screen  2xl:h-auto pt-[72px]`}>
      {/* md:flex */}
      <div class="max-w-7xl mx-auto px-4 sm:px-6  ">
        <div class="py-12 md:py-12 lg:py-16 block md:flex text-center md:text-left">
          <div class="pb-12 md:pb-0 md:py-0 mx-auto md:pr-16 flex items-center basis-3/5">
            <div>
              {/* <h1 class="text-5xl md:text-[3.48rem] font-bold leading-tighter tracking-tighter mb-4 font-heading px-4 md:px-0">
                Robotics Artificial intelligence 
                
              </h1> */}
              {/*  bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 */}
              <div class="relative">

              {/* text-6xl lg:text-6xl*/}
              <h1 class="text-clampTitle   text-transparent bg-clip-text font-extrabold tracking-[1.5]  
              bg-gradient-to-r from-[#00242a] via-[#9c30fff0] to-[#ffffff]  drop-shadow lg:drop-shadow-[17px_20px_5px_rgba(0,0,0,0.5)]">
						Robotics Artificial intelligence 
              </h1>

              {/* <span class="animate-ping transition aese-in  duration-[5000] absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span> */}

                </div>
              <p class="text-white mt-20">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates vero nostrum veritatis alias quibusdam repellendus tempore doloremque cumque sapiente eum laudantium modi quaerat omnis, quidem explicabo suscipit provident voluptatibus unde?
              </p>


            
              
              {/* <h2 class="mt-4 text-3xl lg:text-5xl text-white drop-shadow lg:drop-shadow-[17px_20px_5px_rgba(0,0,0,0.5)]">Tailwind CSS Responsive Text Shadow</h2> */}
             {/* rounded-md */}
              <div
                class=" mt-12 rounded-full  px-3.5 py-2.5 text-sm font-semibold text-white text-center shadow-sm  
                bg-gradient-to-r from-green-400 to-blue-500  
               transition duration-150 ease-in hover:from-pink-500 hover:to-yellow-500 
                 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </div>

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
