import { type PropFunction, component$, useContext } from "@builder.io/qwik";
// import { HiXCircleOutline } from "@qwikest/icons/heroicons";
import clsx from "clsx";
import { ActionButton } from "~/components//button/ActionButton";
import { GlobalContext } from "~/root";

type Props = {
  closeModal: PropFunction;
};

export default component$(({ closeModal }: Props) => {
  const context = useContext(GlobalContext);

  return (
    // w-96
    <div
      class={clsx(
        "p-4 flex flex-col space-y-6 w-[280px]   ml-auto bg-white transition absolute top-10 right-5 rounded-2xl",

        context.profile ? "translate-x-0 delay-300 " : "translate-x-[150%]"
      )}
    >
      <button
        onClick$={closeModal}
        class="ml-auto text-3xl rounded-full text-slate-600"
      >
        {/* <HiXCircleOutline /> */}
        <svg
          class="fill-[#64748b]"
          xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
        {/* <i class="fa-regular fa-circle-xmark"></i> */}
      </button>
      <input
        placeholder="E-mail"
        type="text"
        class="mb-5 border px-5 border-slate-500 rounded-lg h-10"
      />
      <ActionButton
        variant="main"
        class="mx-auto p-2 bg-[#0072ff9e] hover:bg-[#0072ff59]"
        type="submit"
        label="submit"
      />
      <p class="my-10 mx-auto font-bold text-slate-700">or</p>
      <button class="px-4 py-2 border flex gap-2 border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150">
        <svg
          width="24px"
          height="24px"
          viewBox="-0.5 0 48 48"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          fill="#000000"
        >
          <g id="SVGRepo_iconCarrier">
            <g
              id="Icons"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path
                    d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                    id="Fill-1"
                    fill="#FBBC05"
                  ></path>
                  <path
                    d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                    id="Fill-2"
                    fill="#EB4335"
                  ></path>
                  <path
                    d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                    id="Fill-3"
                    fill="#34A853"
                  ></path>
                  <path
                    d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                    id="Fill-4"
                    fill="#4285F4"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <span>Login with Google</span>
      </button>
    </div>
  );
});
