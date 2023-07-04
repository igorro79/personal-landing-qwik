import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { Link, useContent } from "@builder.io/qwik-city";

import Logo from "~/components/atoms/Logo";
import ToggleTheme from "~/components/core/ToggleTheme";
import ToggleMenu from "~/components/core/ToggleMenu";
import { useWindowScroll } from "~/hooks/useWindowScroll";

export default component$(() => {
  // const store = useStore({
  //   isScrolling: false,
  // });

  // Header scrolling logic
  const show = useSignal(true);
  const position = useSignal(0);
  const pos = useWindowScroll();

  useVisibleTask$(({ track }) => {
    track(pos);
    if (pos.value === 0 && show.value === false) {
      show.value = true;
      position.value = pos.value;
      return;
    }
    if (pos.value > 10 && pos.value > position.value) {
      show.value = false;
      position.value = pos.value;
      return;
    }
    if (pos.value !== 0 && pos.value <= position.value) {
      show.value = true;
      position.value = pos.value;
      return;
    }
  });

  const { menu } = useContent();

  return (
    <>
      {/* sticky  sticky*/}
      <header
        // class={` z-30 top-header transition ease-in-out duration-500   flex-none mx-auto  width-header backdrop-blur-sm bg-white/30
        // ${!show.value ? "-translate-y-[150%] " : ""}
        // `}
        class="fixed w-full z-30 top-header    flex-none mx-auto  width-header backdrop-blur-xl "
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

            {/* <!--  BEGIN: buttons-languages-desktop --> */}
            <div class="hidden  xl:block text-white ">
              {/* pl-[22px] xl:pl-[37px] 2xl:pl-[22px]*/}
              <div class="group/item flex items-center  xl:relative ">
                {/* <!--  BEGIN: button-en --> */}
                <span class="  gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
                  {/* <svg
                    class="h-[23.11px] w-[32px]"
                    width="33"
                    height="24"
                    viewBox="0 0 34 25"
                    fill="none"
                  >
                    <path
                      d="M0 3.46471C0 1.82734 1.3293 0.5 2.96907 0.5H30.6804C32.3202 0.5 33.6495 1.82734 33.6495 3.46471V21.5353C33.6495 23.1727 32.3202 24.5 30.6804 24.5H2.96907C1.3293 24.5 0 23.1727 0 21.5353V3.46471Z"
                      fill="#0A17A7"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 8.45598H7.99954L0.025137 3.07717C0.177812 1.90943 1.01103 0.95531 2.11432 0.624697L12.7935 7.82787V0.5H20.7971V7.82824L31.4944 0.612801C32.6064 0.92866 33.4524 1.87553 33.6194 3.04111L25.5915 8.45598H33.6029V16.4596H25.5905L33.6294 21.8819C33.4929 23.0522 32.6739 24.0145 31.5803 24.3614L20.7971 17.088V24.5H12.7935V17.0884L2.02979 24.3486C0.944621 23.9875 0.138033 23.0179 0.0160304 21.8452L8.00057 16.4596H0V8.45598Z"
                      fill="white"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0 14.9H14.4212V24.5H19.2283V14.9H33.6495V10.1H19.2283V0.5H14.4212V10.1H0V14.9Z"
                      fill="#E6273E"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.82938 23.5927C0.676051 23.4339 0.540311 23.258 0.425293 23.0681L10.4953 16.39C10.6473 16.2892 10.8523 16.3307 10.9531 16.4827C11.0539 16.6347 11.0124 16.8397 10.8604 16.9405L0.82938 23.5927Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.936291 1.30225L10.3684 7.68922C10.519 7.79121 10.5589 7.99656 10.4574 8.14789C10.3559 8.29922 10.1515 8.33922 10.0009 8.23724L0.505371 1.80736C0.629895 1.62322 0.77459 1.45379 0.936291 1.30225Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.1724 23.1475C33.0519 23.3328 32.9113 23.5039 32.7537 23.6575L23.0315 17.1809C22.8799 17.0799 22.8399 16.8766 22.9421 16.7268C23.0442 16.577 23.2499 16.5374 23.4015 16.6384L33.1724 23.1475Z"
                      fill="#FF304D"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.1524 1.823L23.3953 8.23992C23.2435 8.33973 23.0395 8.29765 22.9397 8.14593C22.8398 7.9942 22.8819 7.79028 23.0337 7.69047L32.7257 1.31641C32.886 1.46861 33.0293 1.63852 33.1524 1.823Z"
                      fill="#FF304D"
                    ></path>
                  </svg> */}
                  <span class="btn__language-desc uppercase transition-all ease-in">
                    en
                  </span>
                </span>

                {/* <!--  BEGIN: popup-icons-languages hidden -->  */}

                <div class=" invisible  z-10 opacity-0 transition-all group-hover/item:visible  group-hover/item:opacity-100   ">
                  {/* pt-[13px] 2xl:left-[23px] left-[37px]*/}
                  <div class="absolute  top-[27px] left-0 flex justify-center  ">
                    {/* <!-- dropdown__wrapper -->  bg-[#343434] */}
                    <div
                      class="language-wrapper  dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[5px]  
                         py-[4px]  shadow-2xl"
                    >
                      {/* <!-- dropdown__list --> */}
                      <ul class="language-list  flex flex-col gap-[2px] text-lightGrey ">
                        {/* <!--  BEGIN: button-sv --> */}

                        <li class="group">
                          <a
                            href="#"
                            class="language-item  flex items-center gap-[5.5px] rounded-[5px] p-2.5 transition-all ease-in   lg:flex"
                          >
                            {/* <svg
                              class="h-[23.11px] w-[32px]"
                              width="33"
                              height="24"
                              viewBox="0 0 34 25"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                y="0.120117"
                                width="34"
                                height="23.9202"
                                rx="3"
                                fill="#0B5089"
                              />
                              <rect
                                x="7.23438"
                                y="0.120117"
                                width="4.34043"
                                height="23.9202"
                                fill="#FFC100"
                              />
                              <rect
                                y="14.7153"
                                width="5.27056"
                                height="34"
                                transform="rotate(-90 0 14.7153)"
                                fill="#FFC100"
                              />
                            </svg> */}
                            <span class="btn__language-desc uppercase transition-all ease-in group-hover:text-main">
                              sv
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* <!--  END: popup-icons-languages --> */}
              </div>
            </div>
            {/* <!--  END: buttons-languages-desktop --> */}
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
