import { router } from "./router/index.routes.js";

// This validates the switch statement in index.routes.js
// and sets the default homepage to the home

router(window.location.hash);

// This listens to any change in the route and changes the
// page content to show new pages #PrimitiveJSRouting

window.addEventListener("hashchange", () => {
  router(window.location.hash);
});
