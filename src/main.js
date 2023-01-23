import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import { createAuth0 } from "@auth0/auth0-vue";

createApp(App).use(store).use(createAuth0).use(router).mount("#app");
