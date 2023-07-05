const genre = [
  {
    path: "hardcover-fiction",
    name: "hardcover-fiction",
    component: () => import("@/views/Pages/section/BookCategory/Fictions.vue"),
  },
  {
    path: "religion-spirituality-and-faith",
    name: "religion-spirituality-and-faith",
    component: () => import("@/views/Pages/section/BookCategory/Faith.vue"),
  },
  {
    path: "culture",
    name: "culture",
    component: () => import("@/views/Pages/section/BookCategory/Culture.vue"),
  },
  {
    path: "series-books",
    name: "series-books",
    component: () => import("@/views/Pages/section/BookCategory/Series.vue"),
  },
  {
    path: "crime-and-punishment",
    name: "crime-and-punishment",
    component: () => import("@/views/Pages/section/BookCategory/Crime.vue"),
  },
  {
    path: "e-book-nonfiction",
    name: "e-book-nonfiction",
    component: () =>
      import("@/views/Pages/section/BookCategory/Non-fiction.vue"),
  },
  {
    path: "poetry",
    name: "poetry",
    component: () => import("@/views/Pages/section/BookCategory/Poetry.vue"),
  },
  {
    path: "e-book-fiction",
    name: "e-book-fiction",
    component: () =>
      import("@/views/Pages/section/BookCategory/E-book-fiction.vue"),
  },
  {
    path: "science",
    name: "science",
    component: () =>
      import("@/views/Pages/section/BookCategory/Science-Fiction.vue"),
  },
  {
    path: "others",
    name: "others",
    component: () => import("@/views/Pages/section/BookCategory/Others.vue"),
  },
];

export default genre;
