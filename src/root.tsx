import { component$, createContextId, useContextProvider, useStore, useStyles$ } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/core/RouterHead";
import { DarkThemeLauncher } from "~/components/core/DarkThemeLauncher";

import globalStyles from "~/assets/styles/global.css?inline";


export interface GenericType {
  modal: boolean;
  profile: boolean;
 
}

export const GlobalContext = createContextId<GenericType>(
  "mobile-menu-context"
);

export default component$(() => {

   const globalState = useStore<GenericType>({
    // cart: cartInitialValue,
    // cart: [],
    // cartIsOpen: false,
    modal: false,
    profile: false,
  });

    useContextProvider(GlobalContext, globalState);
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Dont remove the `<head>` and `<body>` elements.
   */

  useStyles$(globalStyles);

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

         {/* TODO added carousel tailwind 27.06.2023 */}
       <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/tw-elements/dist/css/tw-elements.min.css" />

       

        {/* awesom */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <RouterHead />
        <DarkThemeLauncher />
      </head>
      <body class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased">
        <RouterOutlet />
        <ServiceWorkerRegister />

        {/* TODO added carousel tailwind 27.06.2023 */}
        {/* <script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/tw-elements.umd.min.js"></script> */}
         {/* <!-- from cdn !!!!!!!!!!!--> */}
<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/collapse.js"></script>

        {/* <!-- from cdn --> */}
{/* <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script> */}
      </body>
    </QwikCityProvider>
  );
});
