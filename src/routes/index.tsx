import { component$ } from "@builder.io/qwik";
// import { DocumentHead, Form } from "@builder.io/qwik-city";
import { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
// import Features from "~/components/widgets/Features";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
// import CallToAction from "~/components/widgets/CallToAction";

import { SITE } from "~/config.mjs";
import HeroTwo from "~/components/widgets/HeroTwo";
import MainFormSection from "~/components/widgets/MainFormSection";


export default component$(() => {
  return (
    <>
      <Hero />
      <HeroTwo/>
      {/* <Features /> */}
      <FAQs />
      
      <Stats />
      {/* <CallToAction /> */}
      <MainFormSection/>

      
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
