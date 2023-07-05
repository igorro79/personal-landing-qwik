// import { component$, Slot } from "@builder.io/qwik";
// import { useContext } from "@builder.io/qwik";
// import { GlobalContext}  from "~/root";

// export default component$(() => {
//   const globalState = useContext(GlobalContext);

//   return (
//     <div
//       id="formMenu"
//       class={`custom__scrollbar absolute right-0 top-0 z-40 h-full w-full overflow-y-auto 
//       ${!globalState.form && "invisible opacity-0"}`}
//     >
     
//       <div class="wrapper-form-tablet absolute right-0 top-0 w-full">
//         <div
//           id="backdrop_02"
//           class="absolute left-0 right-0 top-0 bg-main/70 backdrop-blur-xl xl:h-full xl:min-h-screen xl:w-full"
//         >
//           <div class="h-full w-full"></div>
//         </div>

       
//         <div
//           id="dynamicFormWrapper"
//           class={`relative right-0 ml-auto h-full min-h-screen w-full translate-x-full bg-dark pb-[38px] pl-[20px] pr-[20px] pt-[31px] transition-all lg:px-[30px] lg:pb-[312px] lg:pt-[24px] xl:w-[56.7%] xl:flex-auto xl:pl-[30px] xl:pr-[60px] xl:pt-[44px] 2xl:pl-[140px] 2xl:pr-[60px] 2xl:pt-[44px]      ${
//             globalState.form && "!translate-x-0"
//           }`}
//         >
         

//           <button
//             // id="btnFormMenu"
//             onClick$={() => (globalState.form = false)}
//             aria-label="close form"
//             class="border__rounded group right-5 ml-auto flex rounded-full pb-[8px] pl-[15px] pr-[15px] pt-[8px] hover:bg-white lg:px-[28px] xl:right-[60px]"
//             type="button"
//           >
//             <svg
//               class="fill-white group-hover:fill-black"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M2.84766 0.814453L23.1853 21.1521L21.1516 23.1859L0.813887 2.84822L2.84766 0.814453Z" />
//               <path d="M0.813965 21.1523L21.1517 0.814654L23.1854 2.84842L2.84773 23.1861L0.813965 21.1523Z" />
//             </svg>
//           </button>

//           <h2 class="z-10 mb-[30px] mt-[20px] text-4xl font-bold uppercase leading-[43px] text-white lg:mb-[24px] lg:mt-[32px] lg:leading-[39px] xl:text-[36px] xl:leading-[70px] 2xl:text-[64px]">
//             Låt oss diskutera projektet
//           </h2>

//           <h3 class="mb-[38px] text-sm font-medium leading-[15px] tracking-[1px] text-middleGrey">
//             Get a detailed and clear commercial proposal
//           </h3>

//           <p class="mb-[21px] text-xs font-bold leading-[13px] tracking-[1px] text-middleGrey">
//             I am interested in
//           </p>

//           <Slot />
//         </div>
//       </div>
//     </div>
//   );
// });
