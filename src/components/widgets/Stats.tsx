import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <>
      <div class="bg-gradient-to-r from-[#0d9fe1] to-[#202157] text-white/50  dark:bg-none py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 class="text-center text-[32px]  font-semibold leading-8 ">
            Trusted by the world’s most innovative teams
          </h2>


          <div class=" ticker-wrapper  overflow-hidden h-28 relative
          mx-auto mt-32 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <div class="ticker-wrapper__first-half  ">

         
                 <img
              class="animate-pulse col-span-2 h-28  w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/transistor-logo-white.svg"
              alt="Transistor"
              width="158"
              height="58"
            />
                
         
           {/* max-h-12 */}
            <img
              class="col-span-2 h-28  w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/reform-logo-white.svg"
              alt="Reform"
              width="158"
              height="48"
            />
            <img
              class="animate-pulse  col-span-2 h-28 w-full object-contain lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/tuple-logo-white.svg"
              alt="Tuple"
              width="158"
              height="48"
            />
            <img
              class="col-span-2 h-28 w-full object-contain sm:col-start-2 lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/savvycal-logo-white.svg"
              alt="SavvyCal"
              width="158"
              height="48"
            />
            <img
              class="animate-pulse col-span-2 col-start-2 h-28 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://tailwindui.com/img/logos/158x48/statamic-logo-white.svg"
              alt="Statamic"
              width="158"
              height="48"
              />

              
              </div>
          </div>
        </div>

        {/* 02 */}
        {/* <div class="runningLine pt-5">
          <div class="runningLine__content">
            Amazon - Netflix - PayPal - Nintendo - Burger King - Hennessy - AXA
            - Philips - Hewlett Packard Enterprise - Nissan - Kellogg`s - Amazon
            - Netflix - PayPal - Nintendo - Burger King - Hennessy - AXA -
            Philips - Hewlett Packard Enterprise - Nissan - Kellogg`s
          </div>
        
          <div class="runningLine__content pt-5">
            Philips - Hewlett Packard Enterprise - Nissan - Kellogg`s
          </div>
        </div> */}
      </div>

      {/* <div class="px-4 py-8 md:py-16 sm:px-6 mx-auto md:px-24 lg:px-8 lg:py-20 max-w-7xl">
      <div class="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1] font-heading">
            132K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Downloads
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 mb-10 md:mb-0">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1] font-heading">
            24.8K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Stars
          </p>
        </div>
        <div class="text-center md:border-r dark:md:border-slate-500 font-heading">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1]">
            10.3K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Forks
          </p>
        </div>
        <div class="text-center">
          <div class="text-4xl font-bold lg:text-5xl xl:text-6xl text-[#039de1] font-heading">
            48.4K
          </div>
          <p class="text-sm font-medium tracking-widest text-gray-800 dark:text-slate-400 uppercase lg:text-base">
            Users
          </p>
        </div>
      </div>
      </div> */}

     
    </>
  );
});
