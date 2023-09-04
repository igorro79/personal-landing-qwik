import { component$ } from "@builder.io/qwik";
// import { HiXCircleOutline } from "@qwikest/icons/heroicons";

export default component$(() => {
  return (
    <>
      {/* <!--  BEGIN: buttons-languages-desktop --> */}
      <div class="hidden  lg:block text-white ">
        {/* pl-[22px] xl:pl-[37px] 2xl:pl-[22px]*/}
        <div class="group/item flex items-center  xl:relative ">
          {/* <!--  BEGIN: button-en --> */}
          <span class="  gap-2.5 rounded-lg p-2.5 transition-all ease-in hover:text-main dark:hover:bg-none lg:flex">
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
                class="language-wrapper bg-[#343434] dropdown__wrapper flex min-w-max cursor-default gap-[106px] rounded-[5px]  
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
    </>
  );
});
