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
          class={`peer m-0 block focus:border-light hover:border-light text-accentDark2 w-full outline-none rounded-full border-[1px] dark:hover:border-light dark:focus:border-light  dark:border-middleGrey bg-transparent  bg-clip-padding px-[30px] py-5 text-sm font-medium leading-[1.3] tracking-[1px] dark:text-middleGrey transition ease-in-out 
           ${
             error
               ? "border-red-600/50 dark:border-red-400/50"
               : "   dark:border-light border-accentDark2 "
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
