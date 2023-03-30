import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import moment from "moment";
import gsap from "gsap";
createApp(App).use(store).use(moment).use(gsap).use(router).mount("#app");
