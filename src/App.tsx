import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Product } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="bg-white w-full min-h-screen overflow-x-hidden">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
