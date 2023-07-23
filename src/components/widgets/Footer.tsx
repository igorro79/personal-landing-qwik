import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
// import { IconInstagram } from "~/components/icons/IconInstagram";
// import { IconFacebook } from "~/components/icons/IconFacebook";

// import { IconLinkedin } from "../icons/IconLinkedin";
// import { IconTwitter } from "../icons/IconTwitter";
import { IconLinkedin } from "../icons/IconLinkedin";
import { IconUpwork } from "../icons/IconUpwork";
// import { IconYoutube } from "../icons/IconYoutube";
// import { IconUpwork } from "../icons/IconUpwork";
// import { IconYoutube } from "../icons/IconYoutube";

// import { IconTwitter } from "~/components/icons/IconTwitter";
// import { IconInstagram } from "~/components/icons/IconInstagram";
// import { IconFacebook } from "~/components/icons/IconFacebook";
import { IconGithub } from "~/components/icons/IconGithub";

export default component$(() => {
 
  const social = [
    // {
    //   label: "Instagram",
    //   icon: IconInstagram,
    //   href: "https://www.instagram.com/uwp.digital/",
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    // },

    // {
    //   label: "Facebook",
    //   icon: IconFacebook,
    //   href: "https://www.facebook.com/uwp.digital/",
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    // },
    {
      label: "Linkedin",
      icon: IconLinkedin,
      href: "https://www.linkedin.com/in/igor-griniov-a94b3a211/",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    {
      label: "Upwork",
      icon: IconUpwork,
      href: "https://www.upwork.com/freelancers/~015c2411896db32348",
      target: "_blank",
      rel: "noopener noreferrer",
    },
    // {
    //   label: "Youtube",
    //   icon: IconYoutube,
    //   href: "https://www.youtube.com/",
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    // },
    // {
    //   label: "Twitter",
    //   icon: IconTwitter,
    //   href: "#",
    //   target: "_blank",
    //   rel: "noopener noreferrer",
    // },
    {
      label: "Github",
      icon: IconGithub,
      href: "https://github.com/igorro79",
    },
  ];

  return (
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
                  <span class="icon">{Icon && <Icon />}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div class="flex flex-col items-center gap-[5px] pt-[22px] text-slate-900/50 dark:text-[#94a3b8]  lg:flex-row lg:justify-center lg:gap-[31px] lg:pt-0 xl:gap-[40px]">
          <p class="text-xs font-medium leading-[22px] xl:text-base">
            © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});
