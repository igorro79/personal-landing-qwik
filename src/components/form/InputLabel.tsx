import { component$ } from "@builder.io/qwik";

type InputLabelProps = {
  name: string;
  label?: string;
  required?: boolean;
  margin?: "none";
  inputValue?: any;
};

/**
 * Input label for a form field.
 */
export const InputLabel = component$(
  ({ name, label, required }: InputLabelProps) => (
    <>
      {label && (
        <label
          class={` absolute top-1 pl-[24px] text-sm font-medium leading-[1.3]
           tracking-[1px] text-accentDark2 dark:text-middleGrey peer-placeholder-shown:top-5 peer-focus:top-1 `}
          for={name}
        >
          {label} {required && <span class="ml-1">*</span>}
        </label>
      )}
    </>
  )
);
