import { RouterProvider, createBrowserRouter } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Institutional from "./pages/Institutional";

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./index.css";
import Surfaces from "./pages/Surfaces";

const routes = createBrowserRouter([
  {
    path: "/", element: <MainLayout />, children: [
      { index: true, element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/institutional", element: <Institutional /> },
      { path: "/surfaces", element: <Surfaces /> },
      { path: "*", element: <Error404 /> }
    ]
  }
])

function App() {
  return <RouterProvider router={routes} />
}

export default App
