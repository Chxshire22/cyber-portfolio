import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from './Components/Home';

function App() {

	const router = createBrowserRouter([
		{
			path:"/",
			element:(<Home/>)
		}
	])
  return (
    <>
		<RouterProvider router={router}/>
    </>
  )
}

export default App
