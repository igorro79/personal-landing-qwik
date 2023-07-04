import { component$ } from "@builder.io/qwik";
// import { Link } from "@builder.io/qwik-city";

export const AccordionFaq = component$(() => {
  return (
    
      
    // <div class="   mt-5    text-[#457292]">
    //   <div class="">
    //     <div class="relative ">
    //       <h6 class="mb-0 text-[#457292]">
    //         <button
    //           class="border-[#457292]  rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid py-3.5 text-left font-semibold  transition-all ease-in"
    //           data-collapse-target="collapse-1"
    //         >
    //           <span class="uppercase ">Descrioption</span>
    //           <i class="fa fa-plus absolute right-3.5 pt-1 text-xs group-open:opacity-0"></i>
    //           <i class="fa fa-minus absolute right-3.5 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    //         </button>
    //       </h6>
    //       <div
    //         data-collapse="collapse-1"
    //         class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    //       >
    //         <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
    //           We're not always in the position that we want to be at. We're
    //           constantly growing. We're constantly making mistakes. We're
    //           constantly trying to express ourselves and actualize our dreams.
    //         </div>
    //       </div>
    //     </div>
    //     <div class="relative ">
    //       <h6 class="mb-0">
    //         <button
    //           class="border-[#457292]  rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid py-3.5 text-left font-semibold  transition-all ease-in"
    //           data-collapse-target="collapse-2"
    //         >
    //           <span class="uppercase">Specification</span>
    //           <i class="fa fa-plus absolute right-3.5 pt-1 text-xs group-open:opacity-0"></i>
    //           <i class="fa fa-minus absolute right-3.5 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    //         </button>
    //       </h6>
    //       <div
    //         data-collapse="collapse-2"
    //         class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    //       >
    //         <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
    //           We're not always in the position that we want to be at. We're
    //           constantly growing. We're constantly making mistakes. We're
    //           constantly trying to express ourselves and actualize our dreams.
    //         </div>
    //       </div>
    //     </div>
    //     <div class="relative ">
    //       <h6 class="mb-0">
    //         <button
    //           class="   group relative flex w-full cursor-pointer items-center  py-3.5 text-left font-semibold  transition-all ease-in"
    //           data-collapse-target="collapse-3"
    //         >
    //           <span class="uppercase">Shipping & Returns</span>
    //           <i class="fa fa-plus absolute right-3.5 pt-1 text-xs group-open:opacity-0"></i>
    //           <i class="fa fa-minus absolute right-3.5 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    //         </button>
    //       </h6>
    //       <div
    //         data-collapse="collapse-3"
    //         class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
    //       >
    //         <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
    //           We're not always in the position that we want to be at. We're
    //           constantly growing. We're constantly making mistakes. We're
    //           constantly trying to express ourselves and actualize our dreams.
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
<>
  <div class="relative mb-3">
  <h6 class="mb-0">
    <button
      class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
      data-collapse-target="collapse-1"
    >
      <span>What is Material Tailwind?</span>
      <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
      <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    </button>
  </h6>
  <div
    data-collapse="collapse-1"
    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
  >
    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
      We're not always in the position that we want to be at. We're constantly
      growing. We're constantly making mistakes. We're constantly trying to
      express ourselves and actualize our dreams.
    </div>
  </div>
</div>
<div class="relative mb-3">
  <h6 class="mb-0">
    <button
      class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
      data-collapse-target="collapse-2"
    >
      <span>How to use Material Tailwind?</span>
      <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
      <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    </button>
  </h6>
  <div
    data-collapse="collapse-2"
    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
  >
    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
      We're not always in the position that we want to be at. We're constantly
      growing. We're constantly making mistakes. We're constantly trying to
      express ourselves and actualize our dreams.
    </div>
  </div>
</div>
<div class="relative mb-3">
  <h6 class="mb-0">
    <button
      class="border-slate-100 text-slate-700 rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid p-4 text-left font-semibold text-dark-500 transition-all ease-in"
      data-collapse-target="collapse-3"
    >
      <span>What can I do with Material Tailwind?</span>
      <i class="fa fa-plus absolute right-0 pt-1 text-xs group-open:opacity-0"></i>
      <i class="fa fa-minus absolute right-0 pt-1 text-xs opacity-0 group-open:opacity-100"></i>
    </button>
  </h6>
  <div
    data-collapse="collapse-3"
    class="h-0 overflow-hidden transition-all duration-300 ease-in-out"
  >
    <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
      We're not always in the position that we want to be at. We're constantly
      growing. We're constantly making mistakes. We're constantly trying to
      express ourselves and actualize our dreams.
    </div>
  </div>
      </div>
      
      </>

             

  );
});
