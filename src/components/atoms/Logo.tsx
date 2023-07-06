import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo-03.png?width=64&height=64&png";

export default component$(() => (
  // font-bold ml-4
  <span class="self-center  text-2xl md:text-xl font-medium text-white whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-4"
      width={32}
      height={32}
      alt="Qwind Logo"
      loading="lazy"
    />
    logo
  </span>
));
