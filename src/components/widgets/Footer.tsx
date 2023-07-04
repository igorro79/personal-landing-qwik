import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

import { IconTwitter } from "~/components/icons/IconTwitter";
import { IconInstagram } from "~/components/icons/IconInstagram";
import { IconFacebook } from "~/components/icons/IconFacebook";
import { IconGithub } from "~/components/icons/IconGithub";

export default component$(() => {
  const links = [
    {
      title: "Product",
      items: [
        { title: "Features", href: "#" },
        { title: "Security", href: "#" },
        { title: "Team", href: "#" },
        { title: "Enterprise", href: "#" },
        { title: "Customer stories", href: "#" },
        { title: "Pricing", href: "#" },
        { title: "Resources", href: "#" },
      ],
    },
    {
      title: "Platform",
      items: [
        { title: "Developer API", href: "#" },
        { title: "Partners", href: "#" },
        { title: "Atom", href: "#" },
        { title: "Electron", href: "#" },
        { title: "Qwind Desktop", href: "#" },
      ],
    },
    {
      title: "Support",
      items: [
        { title: "Docs", href: "#" },
        { title: "Community Forum", href: "#" },
        { title: "Professional Services", href: "#" },
        { title: "Skills", href: "#" },
        { title: "Status", href: "#" },
      ],
    },
    {
      title: "Company",
      items: [
        { title: "About", href: "#" },
        { title: "Blog", href: "#" },
        { title: "Careers", href: "#" },
        { title: "Press", href: "#" },
        { title: "Inclusion", href: "#" },
        { title: "Social Impact", href: "#" },
        { title: "Shop", href: "#" },
      ],
    },
  ];

  const social = [
    { label: "Twitter", icon: IconTwitter, href: "#" },
    { label: "Instagram", icon: IconInstagram, href: "#" },
    { label: "Facebook", icon: IconFacebook, href: "#" },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/onwidget/qwind",
    },
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
    bg-light pb-4 pt-[40px] dark:bg-dark sm:bottom-[-0px] lg:pb-[21px] lg:pt-[32px] xl:pb-[28px] xl:pt-[34px]"
    >
      <div class="container sm:max-w-full lg:px-[30px] 3xl:max-w-[1920px] 3xl:px-[135px]">
        {/* <!-- Lock-also  up --> */}
        <div class="mb-[42px] flex justify-between">
          <a
            class="cursor-pointer text-sm font-medium leading-[1.3] text-middleGrey"
            href="#http://"
            target="_blank"
            rel="noopener noreferrer"
          >
            Look also
          </a>

          <button
            type="button"
            id="upButton"
            aria-label="button up"
            class="flex items-center text-sm font-medium leading-[1.3] text-middleGrey transition-all hover:text-main active:text-main"
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

          <ul class="lg:border__top flex flex-row items-center justify-center gap-2 pb-[19px] pt-[28px] sm:gap-5 lg:gap-[50px] lg:pb-[28px] lg:pt-[20px] xl:order-1 xl:mt-[-4px] xl:justify-end xl:gap-[24px] xl:border-t-0 xl:pb-[40px] xl:pl-0 xl:pr-0 xl:pt-0">
            {/* <!-- instagram --> */}
            <li>
              <a
                href="https://www.instagram.com/uwp.digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="instagram"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    fill="currentColor"
                    class="h-[29px] w-[29px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px]"
                    viewBox="0 0 38 39"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M18.9997 11.9951C14.9609 11.9951 11.6875 15.3547 11.6875 19.4998C11.6875 23.645 14.9609 27.0045 18.9997 27.0045C23.0387 27.0045 26.3121 23.645 26.3121 19.4998C26.3121 15.3547 23.0387 11.9951 18.9997 11.9951ZM18.9997 24.3805C16.3777 24.3805 14.2443 22.1908 14.2443 19.4998C14.2443 16.8088 16.3777 14.6192 18.9997 14.6192C21.6217 14.6192 23.7553 16.8088 23.7553 19.4998C23.7553 22.1908 21.6217 24.3805 18.9997 24.3805Z"
                    />
                    <path d="M28.3155 11.6947C28.3155 12.664 27.55 13.4497 26.6055 13.4497C25.6612 13.4497 24.8955 12.664 24.8955 11.6947C24.8955 10.7254 25.6612 9.9397 26.6055 9.9397C27.55 9.9397 28.3155 10.7254 28.3155 11.6947Z" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M19 4.875C15.124 4.875 14.6517 4.89172 13.1209 4.95857C11.6063 5.04215 10.564 5.27615 9.66829 5.64385C8.72371 6.01157 7.942 6.513 7.144 7.332C6.346 8.151 5.85743 8.95328 5.49914 9.92272C5.14086 10.842 4.91286 11.9117 4.83143 13.4661C4.76629 15.0373 4.75 15.522 4.75 19.5C4.75 23.478 4.76629 23.9627 4.83143 25.5338C4.89657 27.0883 5.14086 28.158 5.49914 29.0773C5.85743 30.0467 6.346 30.849 7.144 31.668C7.942 32.487 8.72371 32.9885 9.66829 33.3562C10.5803 33.7238 11.6063 33.9578 13.1209 34.0415C14.6354 34.1083 15.124 34.125 19 34.125C22.876 34.125 23.3483 34.1083 24.8791 34.0415C26.3937 33.9745 27.436 33.7238 28.3317 33.3562C29.2763 32.9885 30.058 32.487 30.856 31.668C31.654 30.849 32.1426 30.0467 32.5009 29.0773C32.8591 28.1413 33.0871 27.0883 33.1686 25.5338C33.2337 23.9795 33.25 23.478 33.25 19.5C33.25 15.522 33.2337 15.0373 33.1686 13.4661C33.1034 11.9117 32.8591 10.842 32.5009 9.92272C32.1426 8.95328 31.654 8.151 30.856 7.332C30.058 6.513 29.2763 6.01157 28.3317 5.64385C27.4197 5.27615 26.3937 5.04215 24.8791 4.95857C23.3483 4.89172 22.876 4.875 19 4.875ZM19 7.51585C22.8109 7.51585 23.2506 7.53257 24.7651 7.59943C26.1494 7.66628 26.9149 7.90028 27.4034 8.10085C28.0711 8.36828 28.5434 8.68585 29.0483 9.18728C29.5531 9.70543 29.8626 10.1901 30.1069 10.8754C30.3023 11.3936 30.5303 12.1624 30.5954 13.5831C30.6606 15.1209 30.6769 15.5889 30.6769 19.5C30.6769 23.4112 30.6606 23.8625 30.5954 25.4168C30.5303 26.8375 30.3023 27.6232 30.1069 28.1245C29.8463 28.8098 29.5369 29.2945 29.0483 29.8127C28.5434 30.3308 28.0711 30.6485 27.4034 30.8992C26.8986 31.0997 26.1494 31.3337 24.7651 31.4005C23.2669 31.4675 22.8109 31.4842 19 31.4842C15.1891 31.4842 14.7494 31.4675 13.2349 31.4005C11.8506 31.3337 11.0851 31.0997 10.5966 30.8992C9.92886 30.6317 9.45657 30.3142 8.95171 29.8127C8.44686 29.2945 8.13743 28.8098 7.89314 28.1245C7.69771 27.6065 7.46971 26.8375 7.40457 25.4168C7.33943 23.8792 7.32314 23.4112 7.32314 19.5C7.32314 15.5889 7.33943 15.1376 7.40457 13.5831C7.46971 12.1624 7.69771 11.3769 7.89314 10.8754C8.15371 10.1901 8.46314 9.70543 8.95171 9.18728C9.45657 8.66915 9.92886 8.35157 10.5966 8.10085C11.1014 7.90028 11.8506 7.66628 13.2349 7.59943C14.7494 7.53257 15.1891 7.51585 19 7.51585Z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            {/* <!-- facebook --> */}

            <li>
              <a
                href="https://www.facebook.com/uwp.digital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="facebook"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    class="h-[20px] w-[20px] lg:h-[22px] lg:w-[23px] xl:h-[23px] xl:w-[23px]"
                    viewBox="0 0 29 29"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g clip-path="url(#clip0_2965_1426)">
                      <path d="M10.9442 29V15.3924H7.25V10.493H10.9442V6.30823C10.9442 3.01983 13.1264 0 18.1546 0C20.1904 0 21.6958 0.190095 21.6958 0.190095L21.5772 4.76531C21.5772 4.76531 20.0419 4.75075 18.3666 4.75075C16.5533 4.75075 16.2628 5.56463 16.2628 6.91548V10.493H21.7213L21.4838 15.3924H16.2628V29H10.9442Z" />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="29" height="29" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </li>
            {/* <!-- linkedin --> */}

            <li>
              <a
                href="https://www.linkedin.com/in/uwpdigital/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="linkedin"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    class="h-[32px] w-[31px] lg:h-[30px] lg:w-[30px] xl:h-[34px] xl:w-[34px]"
                    viewBox="0 0 38 39"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <path d="M7.51616 11.1386C9.33834 11.1386 10.8155 9.62253 10.8155 7.7524C10.8155 5.88226 9.33834 4.36621 7.51616 4.36621C5.69397 4.36621 4.2168 5.88226 4.2168 7.7524C4.2168 9.62253 5.69397 11.1386 7.51616 11.1386Z" />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.9297 32.4901V13.7035H19.3854V16.2726H19.4623C20.2209 14.7977 22.0756 13.2393 24.8426 13.2393C30.6059 13.2393 31.6675 17.1284 31.6675 22.1891V32.4916H25.9811V23.3545C25.9811 21.177 25.9449 18.3743 23.024 18.3743C20.0625 18.3743 19.613 20.7483 19.613 23.1998V32.4901H13.9297ZM10.3604 13.7035H4.66797V32.4901H10.3604V13.7035Z"
                    />
                  </svg>
                </span>
              </a>
            </li>
            {/* <!-- upwork --> */}

            <li>
              <a
                href="https://www.upwork.com/freelancers/~01eecb3b0a9708eb78"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="upwork"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    class="h-[27px] w-[26px] lg:h-[30px] lg:w-[30px] xl:h-[30px] xl:w-[30px]"
                    viewBox="0 0 38 39"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                  >
                    <g clip-path="url(#clip0_2965_1431)">
                      <path d="M29.3829 9.16126C25.3098 9.18137 22.214 11.9461 21.055 16.3519C19.1104 13.2806 17.5934 9.76759 16.7236 6.80176L12.4367 6.82248L12.4961 18.4847C12.4986 19.0337 12.3957 19.5779 12.1934 20.0862C11.991 20.5944 11.693 21.0568 11.3165 21.4469C10.9401 21.8369 10.4924 22.1471 9.99912 22.3596C9.50584 22.5721 8.97661 22.6828 8.44164 22.6854C7.36122 22.6907 6.32302 22.2552 5.55543 21.4749C5.17536 21.0885 4.87317 20.629 4.6661 20.1228C4.45904 19.6165 4.35116 19.0734 4.34862 18.5243L4.28925 6.86209L0 6.88341L0.059375 18.5462C0.076 23.3859 3.84394 27.2207 8.455 27.1963C13.0661 27.1719 16.8002 23.3049 16.7794 18.464L16.7705 16.4835C17.635 18.2385 18.7156 20.1032 19.9031 21.7485L17.2817 34.6331L21.6754 34.6124L23.5636 25.2512C25.2831 26.3438 27.2151 26.994 29.4654 26.983C34.1822 26.9617 38.0238 22.9837 38 17.9216C37.9786 13.0795 34.1003 9.13871 29.3835 9.16065L29.3829 9.16126ZM29.4441 22.4737C27.7293 22.4816 26.011 21.7205 24.6121 20.5157L25.0325 18.7486V18.6376C25.346 16.7644 26.2948 13.5701 29.5106 13.5555C30.6469 13.5533 31.7379 14.0128 32.5452 14.8335C33.3525 15.6542 33.8106 16.7695 33.8194 17.9356C33.7226 20.4664 31.6956 22.4572 29.4435 22.4676L29.4441 22.4737Z" />
                    </g>
                    <defs>
                      <clipPath>
                        <rect width="38" height="39" fill="currentColor" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
              </a>
            </li>

            {/* <!-- youtube --> */}

            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="youtube"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    class="h-[20px] w-[27px] lg:h-[30px] lg:w-[30px] xl:h-[32px] xl:w-[32px]"
                    viewBox="0 0 27 20"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.962 0.751709H14.1061C15.4365 0.756646 22.178 0.806021 23.9957 1.30305C24.5452 1.45474 25.0459 1.75042 25.4478 2.16052C25.8497 2.57063 26.1388 3.08081 26.286 3.64008C26.4495 4.26549 26.5644 5.09332 26.6421 5.94749L26.6583 6.11865L26.6939 6.54656L26.7068 6.71772C26.8121 8.22198 26.825 9.63078 26.8266 9.93855V10.062C26.825 10.3813 26.8104 11.8855 26.6939 13.4523L26.6809 13.6251L26.6664 13.7963C26.5854 14.7377 26.4657 15.6725 26.286 16.3604C26.1392 16.9199 25.8503 17.4304 25.4484 17.8405C25.0464 18.2507 24.5454 18.5462 23.9957 18.6975C22.1181 19.211 14.9817 19.2472 13.9928 19.2488H13.7629C13.2628 19.2488 11.1942 19.2389 9.02527 19.1632L8.75011 19.1534L8.60929 19.1468L8.33251 19.1353L8.05573 19.1237C6.25909 19.0431 4.54823 18.9131 3.75997 18.6958C3.21044 18.5447 2.70961 18.2495 2.30765 17.8396C1.90568 17.4297 1.6167 16.9196 1.46966 16.3604C1.28999 15.6741 1.17022 14.7377 1.08929 13.7963L1.07634 13.6235L1.06339 13.4523C0.983507 12.3371 0.939242 11.2196 0.930664 10.1015L0.930664 9.89905C0.933901 9.5452 0.94685 8.32237 1.03425 6.97282L1.04558 6.8033L1.05044 6.71772L1.06339 6.54656L1.099 6.11865L1.11518 5.94749C1.19288 5.09332 1.3078 4.26384 1.47128 3.64008C1.61807 3.08059 1.90694 2.57017 2.30892 2.15999C2.7109 1.74981 3.21187 1.45429 3.76159 1.30305C4.54985 1.0891 6.26071 0.957433 8.05735 0.875144L8.33251 0.863623L8.61091 0.853749L8.75011 0.848811L9.02689 0.837291C10.5673 0.786887 12.1084 0.758906 13.6496 0.753355H13.962V0.751709ZM11.2897 6.03472V13.9642L18.0182 10.0011L11.2897 6.03472Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="twitter"
                class="social__link"
              >
                <span class="icon">
                  <svg
                    class="h-[27px] w-[26px] lg:h-[30px] lg:w-[30px]"
                    fill="currentColor"
                    viewBox="0 0 24 19"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 2.23529C23.1166 2.62647 22.1644 2.88353 21.1778 3.00647C22.1874 2.41412 22.9675 1.47529 23.3346 0.346471C22.3824 0.905294 21.327 1.29647 20.2141 1.52C19.3078 0.558824 18.0344 0 16.5889 0C13.8929 0 11.6902 2.14588 11.6902 4.79471C11.6902 5.17471 11.7361 5.54353 11.8164 5.89C7.73232 5.68882 4.0956 3.77765 1.67495 0.882941C1.25048 1.58706 1.00956 2.41412 1.00956 3.28588C1.00956 4.95118 1.86998 6.42647 3.20077 7.26471C2.38623 7.26471 1.62906 7.04118 0.963671 6.70588V6.73941C0.963671 9.06412 2.66157 11.0088 4.91013 11.4447C4.18822 11.6372 3.43032 11.664 2.69599 11.5229C3.00758 12.4757 3.61782 13.3094 4.44094 13.9068C5.26405 14.5042 6.25864 14.8353 7.2849 14.8535C5.54527 16.1952 3.38891 16.9204 1.17017 16.91C0.780115 16.91 0.390057 16.8876 0 16.8429C2.17973 18.2065 4.77247 19 7.54876 19C16.5889 19 21.5564 11.6906 21.5564 5.35353C21.5564 5.14118 21.5564 4.94 21.5449 4.72765C22.5086 4.05706 23.3346 3.20765 24 2.23529Z" />
                  </svg>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="flex flex-col items-center gap-[5px] pt-[22px] lg:flex-row lg:justify-center lg:gap-[31px] lg:pt-0 xl:gap-[40px]">
          <a
            href="#"
            class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
          >
            © 2022 Unity World Platform. All rights reserved.
          </a>

          <div class="flex flex-row items-start gap-6 lg:gap-[31px] xl:gap-[40px]">
            <a
              href="#"
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              class="text-xs font-medium leading-[22px] text-middleGrey transition ease-in hover:text-main xl:text-base"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
});
