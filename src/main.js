import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/tailwind.css";
import moment from "moment";
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import gsap from "gsap";
import animatecss from "animate.css"
createApp(App)
  .use(store)
  .use(moment)
  .use(ElementPlus)
  .use(gsap)
  .use(animatecss)
  .use(router)
  .mount("#app");
