import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import { createAuth0 } from "@auth0/auth0-vue";
import "./auth/firebaseConfig";

createApp(App)
  .use(store)
  .use(
    createAuth0({
      domain: "dev-chaxqseb4mvt5h01.uk.auth0.com",
      clientId: "kHpTMUQEtHdnVuljRqpMjHjrNZprnsWy",
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    })
  )
  .use(router)
  .mount("#app");
