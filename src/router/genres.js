const genre = [
  {
    path: "fiction",
    name: "fiction",
    component: () => import("@/views/Pages/Section/BookCategory/Fictions.vue"),
  },
  {
    path: "fantasy",
    name: "fantasy",
    component: () => import("@/views/Pages/Section/BookCategory/Fantasy.vue"),
  },
  {
    path: "love",
    name: "love",
    component: () => import("@/views/Pages/Section/BookCategory/Love.vue"),
  },
  {
    path: "mystery",
    name: "mystery",
    component: () => import("@/views/Pages/Section/BookCategory/Mystery.vue"),
  },
  {
    path: "thriller",
    name: "thriller",
    component: () => import("@/views/Pages/Section/BookCategory/Thriller.vue"),
  },
  {
    path: "non-fiction",
    name: "non-fiction",
    component: () =>
      import("@/views/Pages/Section/BookCategory/Non-fiction.vue"),
  },
  {
    path: "poetry",
    name: "poetry",
    component: () => import("@/views/Pages/Section/BookCategory/Poetry.vue"),
  },
  {
    path: "narrative",
    name: "narrative",
    component: () => import("@/views/Pages/Section/BookCategory/Narrative.vue"),
  },
  {
    path: "science-fiction",
    name: "science-fiction",
    component: () =>
      import("@/views/Pages/Section/BookCategory/Science-Fiction.vue"),
  },
  {
    path: "others",
    name: "others",
    component: () => import("@/views/Pages/Section/BookCategory/Others.vue"),
  },
];

export default genre;
