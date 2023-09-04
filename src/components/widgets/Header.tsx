// import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { component$, $, useStore, useSignal } from "@builder.io/qwik";
import { Link, useContent } from "@builder.io/qwik-city";

import Logo from "~/components/atoms/Logo";
import ToggleTheme from "~/components/core/ToggleTheme";
import ToggleMenu from "~/components/core/ToggleMenu";
import Language from "../feature/Language";
// import { useWindowScroll } from "~/hooks/useWindowScroll";

interface HeaderProps {
  class: string;
}

export default component$((props: HeaderProps) => {
  const store = useStore({
    isScrolling: false,

    modal: false,
  });
  // const store = useStore({
  //   isScrolling: false,
  // });

  // Header scrolling logic
  // const show = useSignal(true);
  // const position = useSignal(0);
  // const pos = useWindowScroll();

  // useVisibleTask$(({ track }) => {
  //   track(pos);
  //   if (pos.value === 0 && show.value === false) {
  //     show.value = true;
  //     position.value = pos.value;
  //     return;
  //   }
  //   if (pos.value > 10 && pos.value > position.value) {
  //     show.value = false;
  //     position.value = pos.value;
  //     return;
  //   }
  //   if (pos.value !== 0 && pos.value <= position.value) {
  //     show.value = true;
  //     position.value = pos.value;
  //     return;
  //   }
  // });

  const { menu } = useContent();
  const menuIsExpanded = useSignal(false);

  const toggleMenu = $(() => {
    menuIsExpanded.value = !menuIsExpanded.value;
    document.body.classList.toggle("overflow-hidden");
    document.body.classList.toggle("h-screen");
    document.getElementById("header")?.classList.toggle("h-screen");
    document.querySelector("#header nav")?.classList.toggle("hidden");
  });
  return (
    <header
      class={`fixed py-4 xl:py-6 w-full z-30   transition ease-in-out duration-300  flex-none mx-auto  width-header backdrop-blur-xl ${
        props.class
      }
         ${store.isScrolling ? "bg-black " : ""} `}
      id="header"
    >
      <div class=" px-4 mx-auto max-w-7xl  md:flex justify-between   ">
        <div class="flex justify-between">
          <div class="flex ">
            <Link class="flex items-center" href={"/"}>
              <Logo />
            </Link>
            {/* hidden */}
            <div class=" items-center md:flex">
              <ToggleTheme iconClass="w-6 h-6" />
            </div>
          </div>
          <div class="flex items-center md:hidden">
            {/* <ToggleTheme iconClass="w-6 h-6" /> */}
            <ToggleMenu
              menuIsExpanded={menuIsExpanded.value}
              toggleMenu={toggleMenu}
              iconClass="w-6 h-6"
            />
          </div>
        </div>

        {/* mb-4 md:mb-0 */}
        <div class="md:self-center flex items-center   ">
          <nav
            class="items-center w-full md:w-auto hidden md:flex text-white text-clampMenu  dark:text-slate-200 h-[calc(100vh-100px)] md:h-auto overflow-y-auto md:overflow-visible "
            aria-label="Main navigation"
          >
            {menu && menu.items ? (
              <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto font-medium ">
                {menu.items?.map((item, i) => (
                  <li key={i} class={`${item.items ? "dropdown" : ""}`}>
                    {item.href ? (
                      <a
                        onClick$={() => menuIsExpanded.value && toggleMenu()}
                        href={item.href}
                        class="font-medium   hover:bg-white/50 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <button class="font-medium  hover:bg-white/50 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">
                        {item.text}
                      </button>
                    )}

                    {item.items ? (
                      // dark:md:bg-slate-800
                      <ul class="dropdown-menu rounded absolute p-4 hidden font-medium text-slate-900 bg-white md:min-w-[200px] dark:bg-white drop-shadow-xl">
                        {item.items.map((item2, i2) => (
                          <li key={i2}>
                            <a
                              class="font-medium text-base leading-5 rounded-t md:hover:bg-gray-100 dark:hover:bg-gray-700/30 py-2 px-4 block whitespace-no-wrap"
                              href={item2.href}
                            >
                              {item2.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : null}
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <Language />
        </div>
      </div>
    </header>
  );
});
