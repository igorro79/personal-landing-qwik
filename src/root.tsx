// import { component$, createContextId, useContextProvider, useStore, useStyles$, useTask$ } from "@builder.io/qwik";
import {
  component$,
  createContextId,
  useContextProvider,
  useStore,
  useStyles$,
} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";

import { RouterHead } from "~/components/core/RouterHead";
import { DarkThemeLauncher } from "~/components/core/DarkThemeLauncher";

import globalStyles from "~/assets/styles/global.css?inline";
import { GoogleAnalytics } from "./components/core/GoogleAnalytics";

export interface GenericType {
  modal: boolean;
  profile: boolean;
  form: boolean;
}

export const GlobalContext = createContextId<GenericType>(
  "mobile-menu-context"
);

export default component$(() => {
  const globalState = useStore<GenericType>({
    modal: false,
    profile: false,
    form: false,
  });

  useContextProvider(GlobalContext, globalState);

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
        <RouterHead />
        <DarkThemeLauncher />
        <GoogleAnalytics />
      </head>
      <body class="text-gray-900 dark:text-slate-300 tracking-tight bg-white dark:bg-gray-900 antialiased">
        <RouterOutlet />
        <ServiceWorkerRegister />

        {/* <!-- Google Tag Manager (noscript) --> */}
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-WBT97DX"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
        {/* <!-- End Google Tag Manager (noscript) --> */}
      </body>
    </QwikCityProvider>
  );
});
