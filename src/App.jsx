import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PortfolioMain from "./pages/PortfolioMain";

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <PortfolioMain />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
