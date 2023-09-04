import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { type InitialValues } from "@modular-forms/qwik";
import ContactForm from "~/components/feature/ContactForm";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { useWindowScroll } from "~/hooks/useWindowScroll";

export type ContactForm = {
  name: string;
  email: string;
  message: string;
};
export const useGaLoader = routeLoader$(async (requestEvent) => {
  console.log(requestEvent.env.get("GA_MEASUREMENT_ID"));
});
export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(
  () => ({
    name: "",
    email: "",
    message: "",
  })
);

export default component$(() => {
  const show = useSignal(true);
  const position = useSignal(0);
  const pos = useWindowScroll();

  useVisibleTask$(({ track }) => {
    track(pos);
    if (pos.value === 0 && show.value === false) {
      show.value = true;
      position.value = pos.value;
      return;
    }
    if (pos.value > 200 && pos.value > position.value) {
      show.value = false;
      position.value = pos.value;
      return;
    }
    if (pos.value !== 0 && pos.value <= position.value) {
      show.value = true;
      position.value = pos.value;
      return;
    }
  });

  return (
    <div>
      <Header
        class={!show.value ? "-translate-y-[150%]  " : "bg-blue-950/20"}
      />

      <main class="overflow-hidden">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
