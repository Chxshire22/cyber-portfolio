import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';
import { useState } from 'react';

function App() {
	const [siteColor, setSiteColor] = useState("green");

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
		<RouterProvider router={router}/>
    </div>
  )
}

export default App
