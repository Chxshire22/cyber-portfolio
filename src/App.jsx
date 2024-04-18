
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';
import { useState } from 'react';
import { HelmetProvider } from "react-helmet-async";


function App() {
	const [siteColor, setSiteColor] = useState("purple");

	const router = createBrowserRouter([
    {
      path: "/",
      element: <Home setSiteColor={setSiteColor} siteColor={siteColor} />,
    },
    {
      path: "/blog",
      element: <Blog setSiteColor={setSiteColor} siteColor={siteColor} />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div data-color={siteColor}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </div>
  );
}

export default App
