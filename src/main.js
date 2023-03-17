import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import "./auth/firebaseConfig";
import moment from "moment";
createApp(App).use(store).use(moment).use(router).mount("#app");
