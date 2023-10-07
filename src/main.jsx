import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import About from "./routes/About/About"
import Repair from "./routes/Repair/Repair"
import Store from "./routes/Store/Store"
import Contact from "./routes/Contact/Contact"
import Home from "./routes/Home/Home"

import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/repair",
				element: <Repair />,
			},
			{
				path: "/store",
				element: <Store />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
])

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)
