import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";

createApp(App)
  .use(store)
  .use(router)
  //   .use(Auth0Plugin, {
  //     domain,
  //     clientId,
  //     audience,
  //     onRedirectCallback: (appState) => {
  //       router.push(
  //         appState && appState.targetUrl
  //           ? appState.targetUrl
  //           : window.location.pathname
  //       );
  //     },
  //   })
  .mount("#app");
