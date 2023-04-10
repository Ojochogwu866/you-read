const genre = [
  {
    path: "hardcover-fiction",
    name: "hardcover-fiction",
    component: () => import("@/views/Pages/Section/BookCategory/Fictions.vue"),
  },
  {
    path: "religion-spirituality-and-faith",
    name: "religion-spirituality-and-faith",
    component: () => import("@/views/Pages/Section/BookCategory/Faith.vue"),
  },
  {
    path: "culture",
    name: "culture",
    component: () => import("@/views/Pages/Section/BookCategory/Culture.vue"),
  },
  {
    path: "series-books",
    name: "series-books",
    component: () => import("@/views/Pages/Section/BookCategory/Series.vue"),
  },
  {
    path: "crime-and-punishment",
    name: "crime-and-punishment",
    component: () => import("@/views/Pages/Section/BookCategory/Crime.vue"),
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
    component: () =>
      import("@/views/Pages/Section/BookCategory/E-book-fiction.vue"),
  },
  {
    path: "science",
    name: "science",
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
