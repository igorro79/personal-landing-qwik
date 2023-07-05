// import { component$, useSignal, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { component$,  useStore, } from "@builder.io/qwik";
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

  return (
    <>
      {/* sticky  sticky*/}
      <header
        // class={`fixed z-30 top-header transition ease-in-out duration-500   flex-none mx-auto  width-header backdrop-blur-sm bg-white/30
        // ${!show.value ? "-translate-y-[150%] " : ""}
        // `}
        // md:bg-slate-300/50 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-slate-300/50 dark:bg-slate-900
        class={`fixed w-full z-30 top-header  transition ease-in-out duration-300  flex-none mx-auto  width-header backdrop-blur-xl ${props.class}
         ${ store.isScrolling
          ? "bg-black "
          : ""
      } `}
        id="header"
      >
        <div class="py-5 px-6 mx-auto   md:flex justify-between   md:px-12">
          <div class="flex ">
            <div class="flex ">
              <Link class="flex items-center" href={"/"}>
                <Logo />
              </Link>
              <div class="hidden items-center md:flex">
                <ToggleTheme iconClass="w-6 h-6" />
              </div>
              <div class="flex items-center md:hidden">
                {/* <ToggleTheme iconClass="w-6 h-6" /> */}
                <ToggleMenu iconClass="w-6 h-6" />
              </div>
            </div>
          </div>

          <div class="md:self-center flex items-center  mb-4 md:mb-0 ">
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
                          href={item.href}
                          class="font-medium   hover:text-white/50 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                        >
                          {item.text}
                        </a>
                      ) : (
                        // TODO disabled  border border-slate-600  26.06.2023
                        <button class="font-medium  hover:text-white/50 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">
                          {item.text}
                        </button>
                      )}

                      {item.items ? (
                        <ul class="dropdown-menu rounded absolute p-4 hidden font-medium text-slate-900 md:bg-white md:min-w-[200px] dark:md:bg-slate-800 drop-shadow-xl">
                          {item.items.map((item2, i2) => (
                            <li key={i2}>
                              <a
                                class="font-medium text-base leading-5 rounded-t md:hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
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
            {/* <button type="button" class="text-[#457292]">
            EN
          </button> */}

            <Language/>
           
          </div>
        </div>
      </header>

      {/* <header
      class={`sticky top-0 z-40 flex-none mx-auto w-full transition-all${
        store.isScrolling
          ? " md:bg-white/90 md:backdrop-blur-sm dark:md:bg-slate-900/90 bg-white dark:bg-slate-900"
          : ""
      }`}
      id="header"
      window:onScroll$={() => {
        if (!store.isScrolling && window.scrollY >= 10) {
          store.isScrolling = true;
        } else if (store.isScrolling && window.scrollY < 10) {
          store.isScrolling = false;
        }
      }}
    >
      <div class="py-3 px-3 mx-auto w-full md:flex md:justify-between max-w-7xl md:px-4">
        <div class="flex justify-between">
          <a class="flex items-center" href={"/"}>
            <Logo />
          </a>
          <div class="flex items-center md:hidden">
            <ToggleTheme iconClass="w-6 h-6" />
            <ToggleMenu iconClass="w-6 h-6" />
          </div>
        </div>
        <div class="md:self-center flex items-center mb-4 md:mb-0 ml-4">
          <nav
            class="items-center w-full md:w-auto hidden md:flex text-gray-500 dark:text-slate-200 h-[calc(100vh-100px)] md:h-auto overflow-y-auto md:overflow-visible pr-4"
            aria-label="Main navigation"
          >
            {menu && menu.items ? (
              <ul class="flex flex-col pt-8 md:pt-0 md:flex-row md:self-center w-full md:w-auto text-xl md:text-lg">
                {menu.items?.map((item) => (
                  <li class={`${item.items ? "dropdown" : ""}`}>
                    {item.href ? (
                      <a
                        href={item.href}
                        class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out"
                      >
                        {item.text}
                      </a>
                    ) : (
                      <button class="font-medium hover:text-gray-900 dark:hover:text-white px-4 py-3 flex items-center transition duration-150 ease-in-out">
                        {item.text}
                      </button>
                    )}

                    {item.items ? (
                      <ul class="dropdown-menu rounded md:absolute pl-4 md:pl-0 md:hidden font-medium md:bg-white md:min-w-[200px] dark:md:bg-slate-800 drop-shadow-xl">
                        {item.items.map((item2) => (
                          <li>
                            <a
                              class="font-medium rounded-t md:hover:bg-gray-100 dark:hover:bg-gray-700 py-2 px-4 block whitespace-no-wrap"
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

          <div class="hidden items-center md:flex">
            <ToggleTheme iconClass="w-6 h-6" />
            <a
              href="https://github.com/onwidget/qwind"
              aria-label="Qwind Github"
              class="ml-3 btn btn-primary w-full h-10 px-5 shadow-none text-base"
            >
              Download
            </a>
          </div>
        </div>
      </div>
      </header> */}
    </>
  );
});
