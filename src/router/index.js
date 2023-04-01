import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ReaderProfile from "@/views/Pages/User-profile/Reader.vue";
import Recommendation from "@/views/Pages/Section/Recommendations.vue";
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/reader/profile/:id",
    name: "reader-profile",
    component: ReaderProfile,
  },
  {
    path: "/book-recommendations",
    name: "book-recommendations",
    component: Recommendation,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
