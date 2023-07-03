import { useOnWindow, useSignal, $ } from "@builder.io/qwik";

export function useWindowScroll() {
  const position = useSignal(0);
  useOnWindow(
    "scroll",
    $(() => {
      position.value = scrollY;
    })
  );
  return position;
}
