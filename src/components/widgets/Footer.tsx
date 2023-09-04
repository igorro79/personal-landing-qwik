import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

// import { IconLinkedin } from "../icons/IconLinkedin";
import { IconTwitter } from "../icons/IconTwitter";
import { IconLinkedin } from "../icons/IconLinkedin";
// import { IconUpwork } from "../icons/IconUpwork";

// import { IconUpwork } from "../icons/IconUpwork";
// import { IconYoutube } from "../icons/IconYoutube";

// import { IconTwitter } from "~/components/icons/IconTwitter";
// import { IconInstagram } from "~/components/icons/IconInstagram";
// import { IconFacebook } from "~/components/icons/IconFacebook";
import { IconGithub } from "~/components/icons/IconGithub";

export default component$(() => {
  // const social = [
  //   {
  //     label: "Instagram",
  //     icon: IconInstagram,
  //     href: "https://www.instagram.com/uwp.digital/",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },

  //   {
  //     label: "Facebook",
  //     icon: IconFacebook,
  //     href: "https://www.facebook.com/uwp.digital/",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },
  //   {
  //     label: "Linkedin",
  //     icon: IconLinkedin,
  //     href: "https://www.linkedin.com/in/uwpdigital/",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },
  //   {
  //     label: "Upwork",
  //     icon: IconUpwork,
  //     href: "https://www.upwork.com/freelancers/~01eecb3b0a9708eb78",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },
  //   {
  //     label: "Youtube",
  //     icon: IconYoutube,
  //     href: "https://www.youtube.com/",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },
  //   {
  //     label: "Twitter",
  //     icon: IconTwitter,
  //     href: "#",
  //     target: "_blank",
  //     rel: "noopener noreferrer",
  //   },
  //   // {
  //   //   label: "Github",
  //   //   icon: IconGithub,
  //   //   href: "https://github.com/onwidget/qwind",
  //   // },
  // ];

  return (
    <footer class="py-4 xl:py-10 ">
      <div>
        <Link href="/">home</Link>
      </div>
    </footer>
  );
});
