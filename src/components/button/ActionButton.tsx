import { component$ } from "@builder.io/qwik";
import clsx from "clsx";
import { type DefaultButtonProps, UnstyledButton } from "./UnstyledButton";
import { Spinner } from "../Spinner";

type ActionButtonProps = DefaultButtonProps & {
  variant: "primary" | "submit";
  label: string;
  loading?: boolean;
  class?: string;
};

/**
 * Button that is used for navigation, to confirm form entries or perform
 * individual actions.
 */
export const ActionButton = component$(
  ({
    label,
    variant,
    loading,
    class: className,
    ...props
  }: ActionButtonProps) => (
    <UnstyledButton
      class={clsx(
        "relative flex items-center justify-center rounded-full px-9 font-bold uppercase no-underline transition-all",
        variant === "primary" &&
          "mx-auto  overflow-hidden bg-accentDark py-2.5 text-base text-white hover:text-accentDark hover:bg-light",
        className
      )}
      loading={loading}
      {...props}
    >
      {
        <span class="flex items-center justify-center gap-3">
          {label}
          {
            loading ? <Spinner /> : null
            // (
            //   <svg
            //     class="inline-block fill-white transition-all group-hover:fill-black group-active:fill-main"
            //     width="14"
            //     height="16"
            //     viewBox="0 0 14 16"
            //     xmlns="http://www.w3.org/2000/svg"
            //   >
            //     <path
            //       fill-rule="evenodd"
            //       clip-rule="evenodd"
            //       d=" M11.6083 4.87452L11.6083 14.594L14 14.594L14 0.499999L0.84559 0.5L0.84559 3.06255L9.91709 3.06255L1.82814e-06 13.688L1.69118 15.5L11.6083 4.87452Z"
            //     />
            //   </svg>
            // )
          }
        </span>
      }
    </UnstyledButton>
  )
);
