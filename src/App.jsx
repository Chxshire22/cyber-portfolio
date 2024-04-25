
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';
import { useState } from 'react';
import { HelmetProvider } from "react-helmet-async";
import {ThemeContext} from './lib/context';


function App() {
	const [siteColor, setSiteColor] = useState("purple");

	const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/blog",
      element: <Blog/>,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return (
    <div data-color={siteColor}>
		<ThemeContext.Provider value={{ siteColor, setSiteColor }}>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
		</ThemeContext.Provider>
    </div>
  );
}

export default App
