import { component$ } from "@builder.io/qwik";

import logoSrc from "/images/g.png";

export default component$(() => (
  <span class="self-center  text-2xl md:text-xl font-medium text-white whitespace-nowrap dark:text-white flex items-center">
    <img
      src={logoSrc}
      class="inline-block mr-4"
      width={32}
      height={32}
      alt="Logo"
      loading="lazy"
    />
    logo
  </span>
));
