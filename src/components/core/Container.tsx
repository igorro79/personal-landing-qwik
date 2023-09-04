import { Slot, component$ } from "@builder.io/qwik";

export const Container = component$(() => {
  return (
    <div class="px-3 md:px-5 xl:px-10 max-w-7xl mx-auto">
      <Slot />
    </div>
  );
});
