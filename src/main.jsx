import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/Routes.jsx"
import { Toaster } from "react-hot-toast"
import { FilterProvider } from "./utils/filterContext.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<FilterProvider>
			<RouterProvider router={router} />
			<Toaster />
		</FilterProvider>
	</React.StrictMode>
)
