import { component$ } from "@builder.io/qwik";

import { IconMenu } from "~/components/icons/IconMenu";

interface ItemProps {
  iconClass?: string;
  toggleMenu: any;
  menuIsExpanded: boolean;
}

export default component$((props: ItemProps) => {
  const { iconClass, toggleMenu, menuIsExpanded } = props;

  return (
    <button
      type="button"
      class={` text-middleGrey tranition ease-in-out hover:bg-lightGrey dark:text-middleGrey dark:hover:text-accentDark2  dark:hover:bg-gray-800 focus:outline-none  dark:focus:ring-gray-700  text-sm p-2.5 inline-flex items-center transition ${
        menuIsExpanded ? "expanded" : ""
      }`}
      aria-label="Toggle Menu"
      onClick$={() => {
        toggleMenu();
      }}
    >
      <IconMenu class={iconClass} />
    </button>
  );
});
