import { component$ } from "@builder.io/qwik";

// @ts-ignore
import logoSrc from "~/assets/images/logo.png?width=64&height=64&png";

export default component$(() => (
  <span class="self-center ml-4 text-2xl md:text-xl font-bold text-white whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-4"
      width={32}
      height={32}
      alt="Qwind Logo"
      loading="lazy"
    />
    LOGO
  </span>
));
