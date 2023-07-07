import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import moment from "moment";
import ElementUI from "element-plus";
import gsap from "gsap";
createApp(App)
  .use(store)
  .use(moment)
  .use(ElementUI)
  .use(gsap)
  .use(router)
  .mount("#app");
