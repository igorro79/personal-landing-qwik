import {
  component$,
  useSignal,
  useTask$,
  type PropFunction,
  type QwikChangeEvent,
  type QwikFocusEvent,
} from "@builder.io/qwik";
// import clsx from "clsx";
import { InputError } from "./InputError";
import { InputLabel } from "./InputLabel";

type TextInputProps = {
  ref: PropFunction<(element: Element) => void>;
  type: "text" | "email" | "tel" | "password" | "url" | "number" | "date";
  name: string;
  value: string | number | undefined;
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
  placeholder?: string;
  required?: boolean;
  class?: string;
  label?: string;
  error?: string;
};

/**
 * Text input field that users can type into. Various decorations can be
 * displayed in or around the field to communicate the entry requirements.
 */
export const TextInput = component$(
  ({ label, value, error, ...props }: TextInputProps) => {
    const { name, required } = props;
    // console.log(props);
    const input = useSignal<string | number>();

    useTask$(({ track }) => {
      if (!Number.isNaN(track(() => value))) {
        input.value = value;
      }
    });

    return (
      <div class="relative mb-4">
        <input
          {...props}
          class={`peer m-0 block  w-full rounded-full border-[1px] border-middleGrey bg-transparent  bg-clip-padding px-[30px] py-5 text-sm font-medium leading-[1.3] tracking-[1px] text-middleGrey transition ease-in-out hover:border-white focus:border-white  focus:shadow-none focus:outline-none focus:outline-0
           ${
             error
               ? "border-red-600/50 dark:border-red-400/50"
               : "border-slate-200 hover:border-slate-300 focus:border-sky-600/50 dark:border-slate-800 dark:hover:border-slate-700 dark:focus:border-sky-400/50"
           }
          `}
          id={name}
          value={input.value}
          placeholder=" "
          aria-invalid={!!error}
          aria-errormessage={`${name}-error`}
        />
        <InputLabel
          name={name}
          label={label}
          required={required}
          // inputValue={input.value}
        />
        <InputError name={name} error={error} />
      </div>
    );
  }
);
