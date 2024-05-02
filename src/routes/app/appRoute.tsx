/* eslint-disable react-refresh/only-export-components */
import loadable from "@loadable/component";

const Dashboard = loadable(() => import("@/views/dashboard/Dashboard"), {
  fallback: <h1>Loading</h1>,
});

const Search = loadable(() => import("@/views/search/Search"), {
  fallback: <h1>Loading</h1>,
});

const Popular = loadable(() => import("@/views/popular/popular"), {
  fallback: <h1>Loading</h1>,
});

const BookDetail = loadable(() => import("@/views/detail/book-detail"), {
  fallback: <h1>Loading</h1>,
});

const ErrorPage = loadable(() => import("@/views/404"), {
  fallback: <h1>Loading</h1>,
});

const appRoute = () => {
  return [
    {
      path: "/",
      element: <Dashboard />,
    },
    {
      path: "/search",
      element: <Search />,
    },
    {
      path: "/popular",
      element: <Popular />,
    },
    {
      path: "/book",
      element: <BookDetail />,
    },
    {
      path: "*",
      element: <ErrorPage />,
    },
  ];
};

export default appRoute;
