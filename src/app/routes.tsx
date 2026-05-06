import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Gallery } from "./pages/Gallery";
import { Quality } from "./pages/Quality";
import { Products } from "./pages/Products";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "gallery", Component: Gallery },
      { path: "quality", Component: Quality },
      { path: "products", Component: Products },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
