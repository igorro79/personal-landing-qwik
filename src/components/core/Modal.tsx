import { Slot, component$, useContext } from "@builder.io/qwik";
import clsx from "clsx";
import { GlobalContext } from "~/root";

// interface ItemProps {
//   iconClass?: string;
// }

export default component$(() => {
  const context = useContext(GlobalContext);

  return (
    // bg-[rgba(0,0,0,0.5)]
    <div
      class={clsx(
        " backdrop-blur-sm bg-slate-900/50 fixed z-50 w-full p-10 h-screen  top-0 left-0 transition duration-300",
        context.modal ? "visible" : "invisible",
        context.modal ? "opacity-100" : "opacity-0"
      )}
    >
      <Slot />
    </div>
  );
});
