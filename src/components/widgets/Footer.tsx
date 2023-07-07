import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { IconInstagram } from "~/components/icons/IconInstagram";
import { IconFacebook } from "~/components/icons/IconFacebook";


// import { IconLinkedin } from "../icons/IconLinkedin";
import { IconTwitter } from "../icons/IconTwitter";
import { IconLinkedin } from "../icons/IconLinkedin";
import { IconUpwork } from "../icons/IconUpwork";
import { IconYoutube } from "../icons/IconYoutube";
// import { IconUpwork } from "../icons/IconUpwork";
// import { IconYoutube } from "../icons/IconYoutube";

// import { IconTwitter } from "~/components/icons/IconTwitter";
// import { IconInstagram } from "~/components/icons/IconInstagram";
// import { IconFacebook } from "~/components/icons/IconFacebook";
// import { IconGithub } from "~/components/icons/IconGithub";

export default component$(() => {
  // const links = [
  //   {
  //     title: "Product",
  //     items: [
  //       { title: "Features", href: "#" },
  //       { title: "Security", href: "#" },
  //       { title: "Team", href: "#" },
  //       { title: "Enterprise", href: "#" },
  //       { title: "Customer stories", href: "#" },
  //       { title: "Pricing", href: "#" },
  //       { title: "Resources", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Platform",
  //     items: [
  //       { title: "Developer API", href: "#" },
  //       { title: "Partners", href: "#" },
  //       { title: "Atom", href: "#" },
  //       { title: "Electron", href: "#" },
  //       { title: "Qwind Desktop", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Support",
  //     items: [
  //       { title: "Docs", href: "#" },
  //       { title: "Community Forum", href: "#" },
  //       { title: "Professional Services", href: "#" },
  //       { title: "Skills", href: "#" },
  //       { title: "Status", href: "#" },
  //     ],
  //   },
  //   {
  //     title: "Company",
  //     items: [
  //       { title: "About", href: "#" },
  //       { title: "Blog", href: "#" },
  //       { title: "Careers", href: "#" },
  //       { title: "Press", href: "#" },
  //       { title: "Inclusion", href: "#" },
  //       { title: "Social Impact", href: "#" },
  //       { title: "Shop", href: "#" },
  //     ],
  //   },
  // ];

  const social = [
   
    { label: "Instagram", icon: IconInstagram, href: "https://www.instagram.com/uwp.digital/", target: "_blank",  rel: "noopener noreferrer" },
    
    { label: "Facebook", icon: IconFacebook, href: "https://www.facebook.com/uwp.digital/", target: "_blank",  rel: "noopener noreferrer" },
    { label: "Linkedin", icon: IconLinkedin, href: "https://www.linkedin.com/in/uwpdigital/", target: "_blank",  rel: "noopener noreferrer" },
    { label: "Upwork", icon: IconUpwork, href: "https://www.upwork.com/freelancers/~01eecb3b0a9708eb78", target: "_blank",  rel: "noopener noreferrer" },
    { label: "Youtube", icon: IconYoutube, href: "https://www.youtube.com/", target: "_blank",  rel: "noopener noreferrer" },
     { label: "Twitter", icon: IconTwitter, href: "#", target: "_blank",  rel: "noopener noreferrer" },
    // {
    //   label: "Github",
    //   icon: IconGithub,
    //   href: "https://github.com/onwidget/qwind",
    // },
  ];

  return (
    // <footer class="border-t border-gray-200 dark:border-slate-800">
    //   <div class="max-w-7xl mx-auto px-4 sm:px-6">
    //     <div class="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
    //       <div class="col-span-12 lg:col-span-4 pr-8">
    //         <div class="mb-2">
    //           <Link class="inline-block font-bold text-xl" href={"/"}>
    //             Qwind
    //           </Link>
    //         </div>
    //         <div class="text-sm text-gray-600 dark:text-gray-400">
    //           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
    //           sagittis, quam nec venenatis lobortis, mi risus tempus nulla
    //         </div>
    //       </div>
    //       {links.map(({ title, items }, index) => (
    //         <div key={index} class="col-span-6 md:col-span-3 lg:col-span-2">
    //           <div class="text-gray-800 dark:text-gray-300 font-medium mb-2">
    //             {title}
    //           </div>
    //           {items && Array.isArray(items) && items.length > 0 && (
    //             <ul class="text-sm">
    //               {items.map(({ title, href }, index2) => (
    //                 <li key={index2} class="mb-2">
    //                   <Link
    //                     class="text-gray-600 hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
    //                     href={href}
    //                   >
    //                     {title}
    //                   </Link>
    //                 </li>
    //               ))}
    //             </ul>
    //           )}
    //         </div>
    //       ))}
    //     </div>
    //     <div class="md:flex md:items-center md:justify-between py-6 md:py-8">
    //       <ul class="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0">
    //         {social.map(({ label, href, icon: Icon }, index) => (
    //           <li key={index}>
    //             <Link
    //               class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
    //               aria-label={label}
    //               title={label}
    //               href={href}
    //             >
    //               {Icon && <Icon />}
    //             </Link>
    //           </li>
    //         ))}
    //       </ul>

    //       <div class="text-sm text-gray-700 mr-4 dark:text-slate-400">
    //         <span class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 float-left rounded-sm bg-[url(https://onwidget.com/favicon/favicon-32x32.png)]"></span>
    //         Made by{" "}
    //         <a
    //           class="text-secondary-700 hover:underline dark:text-gray-200"
    //           href="https://onwidget.com/"
    //         >
    //           {" "}
    //           onWidget
    //         </a>{" "}
    //         · All rights reserved.
    //       </div>
    //     </div>
    //   </div>
    // </footer>

    <footer
      class=" sticky bottom-[-320px] 
    bg-light pb-4 pt-[40px] dark:bg-[#3e3e60]  sm:bottom-[-0px] lg:pb-[21px] lg:pt-[32px] xl:pb-[28px] xl:pt-[34px]"
    >
      <div class="container p-4 sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        {/* <!-- Lock-also  up --> */}
        <div class="mb-[42px] flex justify-between ">
          {/* text-middleGrey */}
          <Link
            class="cursor-pointer text-sm font-medium leading-[1.3] text-slate-900/50 dark:text-[#94a3b8]"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Look also
          </Link>

          <button
            type="button"
            id="upButton"
            aria-label="button up"
            class="flex items-center text-sm font-medium leading-[1.3] text-slate-900/50 dark:text-[#94a3b8] transition-all hover:text-main dark:hover:text-main active:text-main"
          >
            Up
            <svg
              class="ml-[6px]"
              width="15"
              height="15"
              viewBox="0 0 15 15"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.99797 4.1301L12.8616 8.99369L14.0584 7.79689L7.00577 0.744298L0.423353 7.32672L1.70564 8.60901L6.24499 4.06966L6.59945 14.3491L8.35243 14.4095L7.99797 4.1301Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>

        <div class="lg:grid lg:grid-cols-1">
          {/* <!-- BEGIN: nav-footer --> */}
          <ul class="lg:border__bottom grid max-w-[84%] grid-flow-col grid-rows-3 items-center gap-x-[28px] gap-y-[30px] pb-[37px] text-lg font-medium uppercase leading-6 text-dark dark:text-white sm:max-w-full sm:grid-rows-2 sm:gap-x-[8px] sm:pb-[22px] lg:max-w-full lg:grid-rows-1 lg:gap-x-[8px] lg:pb-[22px] lg:text-xl xl:max-w-[72.5%] xl:gap-x-[0px] xl:border-b-0 xl:pb-[49px] xl:text-[20px] 2xl:text-2xl">
            <li>
              <a
                class="whitespace-nowrap transition-all hover:text-main dark:hover:text-main"
                href="#aboutUs"
                aria-label="about us page"
              >
                About us
              </a>
            </li>

            <li>
              <a
                class="_nav-item-activ whitespace-nowrap transition-all hover:text-main dark:hover:text-main"
                href="#cases"
                aria-label="cases page"
              >
                Case Studies
              </a>
            </li>
            <li>
              <a
                class="whitespace-nowrap transition-all hover:text-main dark:hover:text-main"
                href="#services"
                aria-label="services page"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#blog"
                class="whitespace-nowrap transition-all hover:text-main dark:hover:text-main"
                aria-label="blog page"
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#contact"
                class="whitespace-nowrap transition-all hover:text-main dark:hover:text-main"
                aria-label="contact page"
              >
                Contact
              </a>
            </li>
          </ul>
          {/* <!-- END: nav-footer --> */}
          <ul class="border__bottom border__top xl:border__top xl:border__bottom flex flex-col gap-y-5 pb-8 pt-[32px] text-sm font-medium uppercase leading-[18px] text-dark sm:flex-row sm:flex-wrap sm:gap-x-[53px] lg:flex lg:flex-wrap lg:gap-x-[53px] lg:border-0 lg:pb-5 lg:pt-5 xl:order-3 xl:col-span-2 xl:mb-[51px] xl:w-full xl:justify-between xl:pt-[23px] xl:text-base">
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#branding"
              >
                BRANDING
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#digital_marketing"
              >
                DIGITAL MARKETING
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#web_design"
              >
                WEB design
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#smm"
              >
                SMM
              </a>
            </li>

            <li>
              <a
                class="_nav-item-activ transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#ppc"
              >
                PPC
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#tiktok"
              >
                TikTok
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#video_motion"
              >
                VIDEO MOTION
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#seo"
              >
                SEO
              </a>
            </li>
            <li>
              <a
                class="transition-all hover:text-main dark:text-white dark:hover:text-main"
                href="#mobile_promotion"
              >
                MOBILE PROMOTION
              </a>
            </li>
          </ul>
          {/* <!-- END: footer-items --> */}

          {/* <!-- BEGIN: socials-footer --> */}

          {/* <ul class="lg:border__top flex flex-row items-center justify-center gap-2 pb-[19px] pt-[28px] sm:gap-5 lg:gap-[50px] lg:pb-[28px] lg:pt-[20px] xl:order-1 xl:mt-[-4px] xl:justify-end xl:gap-[24px] xl:border-t-0 xl:pb-[40px] xl:pl-0 xl:pr-0 xl:pt-0"> */}
            {/* <!-- instagram --> */}
            {/* <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                class="social__link"
              >

                <span class="icon">
                  <IconInstagram/>

                </span>
              </a>
            </li> */}
            {/* <!-- facebook --> */}

            {/* <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                class="social__link"
              >
                <span class="icon">

                  <IconTwitter/>

                </span>
              </a>
            </li> */}
            {/* <!-- linkedin --> */}           
            
            {/* <!-- upwork --> */}            

            {/* <!-- youtube --> */}           
           
            {/* <!-- twitter --> */}
            {/* <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
                class="social__link"
              >
                <span class="icon">
                  <IconTwitter />
                </span>
              </a>
            </li>
          </ul> */}

          {/* 02 */}
          <ul class="lg:border__top flex flex-row items-center justify-center gap-2 pb-[19px] pt-[28px] sm:gap-5 lg:gap-[50px] lg:pb-[28px] lg:pt-[20px] xl:order-1 xl:mt-[-4px] xl:justify-end xl:gap-[24px] xl:border-t-0 xl:pb-[40px] xl:pl-0 xl:pr-0 xl:pt-0">
             {social.map(({ label, href, icon: Icon, target, rel }, index) => (
               <li key={index}>
                 <a
                   class="social__link"
                   aria-label={label}
                   title={label}
                   href={href}
                   target={target}
                rel={rel}
                 >
                   <span class="icon">
                     {Icon && <Icon />}
                     </span>
                 </a>
               </li>
             ))}
           </ul>
           
        
        </div>



        <div class="flex flex-col items-center gap-[5px] pt-[22px] text-slate-900/50 dark:text-[#94a3b8]  lg:flex-row lg:justify-center lg:gap-[31px] lg:pt-0 xl:gap-[40px]">
          <a
            href="#"
            class="text-xs font-medium leading-[22px]  transition ease-in hover:text-main xl:text-base"
          >
            © 2023 Unity World Platform. All rights reserved.
          </a>

          <div class="flex flex-row items-start gap-6 lg:gap-[31px] xl:gap-[40px]">
            <a
              href="#"
              class="text-xs font-medium leading-[22px]  transition ease-in hover:text-main xl:text-base"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              class="text-xs font-medium leading-[22px]  transition ease-in hover:text-main xl:text-base"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
