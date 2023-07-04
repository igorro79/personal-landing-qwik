import { component$, Slot, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";

import { type InitialValues } from "@modular-forms/qwik";

import Footer from "~/components/widgets/Footer";
import Header from "~/components/widgets/Header";
import { useWindowScroll } from "~/hooks/useWindowScroll";

export type ContactForm = {
  categories: string[];
  username: string;
  email: string;
  phone: string; // phone length
  company: string;
  message: string;
  about: string;
  file: any | undefined;
};

export const useContactFormLoader = routeLoader$<InitialValues<ContactForm>>(
  () => ({
    categories: [],
    username: "",
    email: "",
    message: "",
    phone: "",
    company: "",
    about: "",
    file: undefined,
  })
);



  


export default component$(() => {

  const show = useSignal(true);
  const position = useSignal(0);
  const pos = useWindowScroll();
  // const globalState = useContext(IsOpenedContext);

  //tracking page scroll to hide/show header
  useVisibleTask$(({ track }) => {
    track(pos);
    if (pos.value === 0 && show.value === false) {
      show.value = true;
      position.value = pos.value;
      return;
    }
    if (pos.value > 300 && pos.value > position.value) {
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
        // class={!show.value ? "invisible opacity-0" : "visible opacity-100"}
        class={!show.value ? "-translate-y-[150%]  " : "bg-slate-500/50"}
      />
      <main class="relative z-10 bg-light dark:bg-dark">
        <Slot />
      </main>
      <Footer />
    </div>
  );
});
