import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

import { IconSun } from "~/components/icons/IconSun";
import { IconMoon } from "../icons/IconMoon";

interface ItemProps {
  iconClass?: string;
}

export default component$((props: ItemProps) => {
  const { iconClass } = props;
  const store = useStore({
    theme:
      (typeof window !== "undefined" && window?.localStorage?.theme) ||
      undefined,
  });

  useVisibleTask$(() => {
    store.theme =
      document.documentElement.classList.contains("dark")
      ? "dark"
      : "light";
  });

  return (
    // hover:bg-gray-100 text-gray-500 focus:ring-4 focus:ring-gray-200 dark:hover:bg-gray-700
    <button
      type="button"
      class="text-white dark:text-gray-400   focus:outline-none  dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
      aria-label="Toggle between Dark and Light mode"
      onClick$={() => {
        switch (store.theme) {
          case "dark":
            document.documentElement.classList.remove("dark");
            store.theme = window.localStorage.theme = "light";
            break;
          default:
            document.documentElement.classList.add("dark");
            store.theme = window.localStorage.theme = "dark";
            break;
        }
      }}
    >
      {store.theme == "dark" ? (
        <IconSun class={iconClass} />
      ) : (
          
      <IconMoon class={iconClass} />
      )}
    </button>
  );
});
