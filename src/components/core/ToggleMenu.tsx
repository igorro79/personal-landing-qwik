import { component$, useStore } from "@builder.io/qwik";

import { IconMenu } from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;

  const store = useStore({
    isExpanded: false,
  });

  return (
    // ml-1.5 rounded-lg focus:ring-4 focus:ring-gray-200
    <button
      type="button"
      class={` text-gray-500 tranition ease-in-out hover:bg-[#8c5cd8] dark:text-gray-400  dark:hover:bg-gray-800 focus:outline-none  dark:focus:ring-gray-700  text-sm p-2.5 inline-flex items-center transition ${
        store.isExpanded ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={() => {
        store.isExpanded = store.isExpanded ? false : true;

        // TODO:
        document.body.classList.toggle("overflow-hidden");
        document.getElementById("header")?.classList.toggle("h-screen");
        document.querySelector("#header nav")?.classList.toggle("hidden");
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
