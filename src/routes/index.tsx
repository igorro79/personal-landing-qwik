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
import PageCarousel from "~/components/widgets/PageCarousel";

export default component$(() => {
  return (
    <>
      <Hero />
      <HeroTwo />
      <PageCarousel />
      <FAQs />
      <Stats />
      <MainFormSection />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "Homepage",
      content: SITE.description,
    },
  ],
};
