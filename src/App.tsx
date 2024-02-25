import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About, Home, Layanan } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/layanan",
    element: <Layanan />,
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
