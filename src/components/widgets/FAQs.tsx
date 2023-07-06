import { component$ } from "@builder.io/qwik";

import { IconArrowDownRight } from "../icons/IconArrowDownRight";

export default component$(() => {
  const items = [
    [
      {
        collapse: "collapse-1",
        question: "What do I need to start?",
        answer: `Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds.

    Many say exploration is part of our destiny, but it’s actually our duty to future generations.`,
      },
      {
         collapse: "collapse-2",
        question: "How to install the Qwik + Tailwind CSS template?",
        answer: `Well, the way they make shows is, they make one show. That show's called a pilot.

    Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows. Some pilots get picked and become television programs. Some don't, become nothing. She starred in one of the ones that became nothing.`,
      },
      {
         collapse: "collapse-3",
        question: "What's something that you completely don't understand?",
        answer: `A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.`,
      },
    
    
      {
         collapse: "collapse-4",
        question: "What's an example of when you changed your mind?",
        answer: `Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.`,
      },
      {
         collapse: "collapse-5",
        question: "What is something that you would really like to try again?",
        answer: `A business big enough that it could be listed on the NASDAQ goes belly up. Disappears!

      It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.`,
      },
      {
         collapse: "collapse-6",
        question:
          "If you could only ask one question to each person you meet, what would that question be?",
        answer: `This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.`,
      },
    ],
  ];

  return (
    <section class="py-8 border-t text-[#457292] border-gray-200 dark:border-slate-800 dark:text-white">
      <div class="px-4  mx-auto max-w-6xl lg:py-20">
        <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
          {/* <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"> */}
            {/* <p class="text-base text-primary-600 dark:text-purple-200 font-semibold tracking-wide uppercase">
              FAQs
            </p> */}
            <h2 class="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight sm:text-4xl md:mx-auto font-heading">
              Frequently Asked Questions
            </h2>
          {/* </div> */}
        </div>
       
        <div class="max-w-screen-xl sm:mx-auto ">
          <div class="grid grid-cols-1 gap-x-8 gap-y-8 lg:gap-x-16 md:grid-cols-1">
            {items.map((subitems, index) => (
              <div key={index} class="space-y-8">
                {subitems.map(({ collapse, question, answer }, index2) => (
                  <div key={index2}>
                    <div class="relative ">
                      <h6 class="mb-0 text-[#457292] dark:text-white">
                        <button
                          class="border-[#45729252]  rounded-t-1 group relative flex w-full cursor-pointer items-center border-b border-solid py-3.5 text-left font-semibold  transition-all ease-in"
                          // data-collapse-target="collapse-1"
                          data-collapse-target={collapse}
                        >
                          <h3 class=" pr-6 text-xl font-bold hover:translate-x-2 transition ease-in-out duration-500 ">
                            <IconArrowDownRight class="w-7 h-7 mr-4 text-secondary-500 inline-block" />
                            {question}
                          </h3>
                          {/* <span class="uppercase ">Descrioption</span> */}
                          <svg
                          class="w-6 h-6 fill-[#457292] dark:fill-white absolute right-3.5 pt-1 text-xl group-open:opacity-0"
                            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                            
                            <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                          
                          <svg
                            class="w-6 h-6 fill-[#457292] dark:fill-white absolute right-3.5 pt-1 text-xl opacity-0 group-open:opacity-100"
                            xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                          {/* <i class="fa fa-plus absolute right-3.5 pt-1 text-xl group-open:opacity-0"></i>
                          <i class="fa fa-minus absolute right-3.5 pt-1 text-xl opacity-0 group-open:opacity-100"></i> */}
                        </button>
                      </h6>
                      <div
                        // data-collapse="collapse-1"
                        data-collapse={collapse}
                        class="h-0  overflow-hidden transition-all duration-300 ease-in-out"
                      >
                        {/* <div class="p-4 text-sm leading-normal text-blue-gray-500/80">
                          We're not always in the position that we want to be
                          at. We're constantly growing. We're constantly making
                          mistakes. We're constantly trying to express ourselves
                          and actualize our dreams.
                        </div> */}

                        {answer.split("\n\n").map((paragraph, index3) => (
                          <p
                            key={index3}
                            class="text-slate-700/50 p-4 dark:text-gray-400 mb-2"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* <h3 class="mb-4 text-xl font-bold">
                      <IconArrowDownRight class="w-7 h-7 text-secondary-500 inline-block" />
                      {question}
                    </h3> */}
                    {/* {answer.split("\n\n").map((paragraph, index3) => (
                      <p
                        key={index3}
                        class="text-gray-700 dark:text-gray-400 mb-2"
                      >
                        {paragraph}
                      </p>
                    ))} */}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
