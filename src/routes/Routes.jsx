import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import Home from "../pages/Home"
import ListedBooks from "../pages/ListedBooks"
import PagesToRead from "../pages/PagesToRead"
import BookDetail from "../pages/BookDetail"
import ReadBook from "../components/ReadBook"
import WishlistBook from "../components/WishlistBook"
import ErrorPage from "../components/ErrorPage"
import Contact from "../pages/Contact"
import AllBooks from "../pages/AllBooks"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				loader: () => fetch("/book.json"),
				element: <Home />,
			},
			{
				path: "/listedBooks",
				loader: () => fetch("/book.json"),
				element: <ListedBooks />,
				children: [
					{
						index: true,
						element: <ReadBook />,
						loader: () => fetch("/book.json"),
					},
					{
						path: "wishlist",
						element: <WishlistBook />,
						loader: () => fetch("/book.json"),
					},
				],
			},
			{
				path: "/pagesToRead",
				loader: () => fetch("/book.json"),
				element: <PagesToRead />,
			},
			{
				path: "/bookDetail/:id",
				loader: () => fetch("/book.json"),
				element: <BookDetail />,
			},
			{
				path: "/allBooks",
				loader: () => fetch("/book.json"),
				element: <AllBooks />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
		],
	},
])
