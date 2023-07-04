import { component$, type PropFunction, Slot } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type LinkProps = {
  type: "link";
  href: string;
  download?: boolean | string;
  target?: "_blank";
};

type ButtonProps = {
  type: "button" | "reset" | "submit";
  "preventdefault:click"?: boolean;
  onClick$?: PropFunction<() => unknown>;
};

export type DefaultButtonProps = LinkProps | ButtonProps;

type UnstyledButtonProps = DefaultButtonProps & {
  class?: string;
  "aria-label"?: string;
  loading?: boolean;
};

/**
 * Basic button component that contains important functionality and is used to
 * build more complex components on top of it.
 */
export const UnstyledButton = component$(
  ({ loading, ...props }: UnstyledButtonProps) => {
    return (
      <>
        {/* Link button */}
        {props.type === "link" && (
          <Link
            {...props}
            rel={props.target === "_blank" ? "noreferrer" : undefined}
          >
            <Slot />
          </Link>
        )}

        {/* Normal button */}
        {props.type !== "link" && (
          <button disabled={loading} {...props}>
            <Slot />
          </button>
        )}
      </>
    );
  }
);
