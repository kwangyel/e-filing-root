import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@dhs/editor",
  app: () =>
    System.import(
      "@dhs/editor"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@dhs/navbar",
//   app: () => System.import("@dhs/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
