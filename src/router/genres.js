const genre = [
  {
    path: "hardcover-fiction",
    name: "hardcover-fiction",
    component: () => import("@/views/Pages/Section/BookCategory/Fictions.vue"),
  },
  {
    path: "fantasy",
    name: "fantasy",
    component: () => import("@/views/Pages/Section/BookCategory/Fantasy.vue"),
  },
  {
    path: "culture",
    name: "culture",
    component: () => import("@/views/Pages/Section/BookCategory/Love.vue"),
  },
  {
    path: "mystery",
    name: "mystery",
    component: () => import("@/views/Pages/Section/BookCategory/Mystery.vue"),
  },
  {
    path: "crime-and-punishment",
    name: "crime-and-punishment",
    component: () => import("@/views/Pages/Section/BookCategory/Thriller.vue"),
  },
  {
    path: "e-book-nonfiction",
    name: "e-book-nonfiction",
    component: () =>
      import("@/views/Pages/Section/BookCategory/Non-fiction.vue"),
  },
  {
    path: "poetry",
    name: "poetry",
    component: () => import("@/views/Pages/Section/BookCategory/Poetry.vue"),
  },
  {
    path: "e-book-fiction",
    name: "e-book-fiction",
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
