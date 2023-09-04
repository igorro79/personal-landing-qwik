import { component$ } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { SITE } from "~/config.mjs";

import Hero from "~/components/widgets/Hero";

import About from "~/components/widgets/About";
import Projects from "~/components/widgets/Projects";

import MainFormSection from "~/components/widgets/MainFormSection";

export default component$(() => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <MainFormSection />
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
