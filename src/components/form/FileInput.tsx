import {
  component$,
  type NoSerialize,
  noSerialize,
  useSignal,
  useTask$,
  type PropFunction,
  type QwikChangeEvent,
  type QwikFocusEvent,
} from "@builder.io/qwik";
// import clsx from "clsx";
import { InputError } from "./InputError";
// import { InputLabel } from "./InputLabel";

type FileInputProps = {
  ref: PropFunction<(element: Element) => void>;
  name: string;
  value:
    | NoSerialize<Blob>
    | NoSerialize<Blob[]>
    | NoSerialize<File>
    | NoSerialize<File[]>
    | null
    | undefined;
  onInput$: PropFunction<(event: Event, element: HTMLInputElement) => void>;
  onChange$: PropFunction<
    (
      event: QwikChangeEvent<HTMLInputElement>,
      element: HTMLInputElement
    ) => void
  >;
  onBlur$: PropFunction<
    (event: QwikFocusEvent<HTMLInputElement>, element: HTMLInputElement) => void
  >;
  accept?: string;
  required?: boolean;
  multiple?: boolean;
  class?: string;
  label?: string;
  error?: string;
};

/**
 * File input field that users can click or drag files into. Various
 * decorations can be displayed in or around the field to communicate the entry
 * requirements.
 */
export const FileInput = component$(
  ({ value, label, error, ...props }: FileInputProps) => {
    const { name, multiple } = props;

    // Create computed value of selected files
    const files = useSignal<NoSerialize<Blob[]> | NoSerialize<File[]>>();
    useTask$(({ track }) => {
      track(() => value);
      files.value = noSerialize(
        value ? (Array.isArray(value) ? value : [value]) : []
      );
    });

    return (
      <div class={`group relative inline-block w-fit ${props.class}`}>
        <label for={name} class={`label-file flex cursor-pointer items-center`}>
          <span class="flex h-[38px] min-w-[38px] items-center justify-center rounded-full bg-bgColorBtnForm transition-all group-hover:bg-main">
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.90685 19.4677C6.66628 20.6956 9.9129 19.4486 11.1387 16.69L14.5426 9.04868C14.5648 8.99888 14.5651 8.94289 14.5456 8.8921C14.5261 8.8413 14.4884 8.79994 14.4386 8.77778L13.3576 8.29677C13.3083 8.27494 13.2523 8.27355 13.2019 8.29289C13.1516 8.31224 13.1109 8.35075 13.0888 8.40001L9.68496 16.0413C9.26261 16.9904 8.49512 17.7175 7.52579 18.0898C6.55647 18.4621 5.49958 18.4358 4.5526 18.0126C3.60349 17.5903 2.87641 16.8228 2.50492 15.8555C2.13261 14.8862 2.15979 13.8315 2.58214 12.8823L6.05039 5.09244L6.61222 3.8299C7.13755 2.64937 8.52382 2.11693 9.70434 2.64226C10.2756 2.89645 10.7126 3.35763 10.9369 3.94177C11.1613 4.5259 11.1454 5.16104 10.8912 5.73226L7.45029 13.4607C7.36214 13.6548 7.20597 13.8046 7.00702 13.8811L7.00491 13.8819C6.80596 13.9583 6.59176 13.9507 6.39842 13.8647C6.20215 13.7773 6.05443 13.6203 5.97801 13.4214C5.90242 13.2246 5.90919 13.0082 5.99522 12.8149L8.8086 6.50057C8.83076 6.45077 8.83111 6.39478 8.8116 6.34398C8.79209 6.29319 8.75435 6.25183 8.70455 6.22967L7.62363 5.74866C7.57428 5.72683 7.51829 5.72543 7.46792 5.74478C7.41754 5.76413 7.37688 5.80264 7.35484 5.85189L4.54439 12.1675C4.28499 12.7505 4.2689 13.3978 4.49732 13.9925C4.72574 14.5873 5.17397 15.0587 5.75398 15.3168C6.95793 15.8526 8.3709 15.3074 8.90747 14.1056L9.24037 13.3536L12.3462 6.37801C12.5577 5.90643 12.6735 5.39756 12.6869 4.88089C12.7002 4.36422 12.6109 3.85005 12.424 3.36819C12.0476 2.38827 11.3109 1.61476 10.353 1.1885C9.36078 0.74871 8.28371 0.751956 7.34401 1.11288C6.40431 1.47381 5.60199 2.19241 5.16139 3.18252L1.12919 12.2358C0.536893 13.5708 0.496976 15.0603 1.02129 16.4254C1.5443 17.7934 2.57107 18.8732 3.90685 19.4677Z"
                fill="#F8F8F8"
              ></path>
            </svg>
          </span>

          <span class="ml-3 cursor-pointer text-sm font-medium leading-[1.3] tracking-[1px] text-middleGrey transition-all group-hover:text-main">
            {files.value?.length
              ? `Selected file ${multiple ? "s" : ""}:${" "}
              ${files.value?.map(({ name }) => name).join(", ")}`
              : label}
          </span>

          <input
            {...props}
            class="absolute hidden h-full cursor-pointer opacity-0"
            type="file"
            id={name}
            aria-invalid={!!error}
            aria-errormessage={`${name}-error`}
          />
        </label>
        <InputError name={name} error={error} />
      </div>
    );
  }
);
