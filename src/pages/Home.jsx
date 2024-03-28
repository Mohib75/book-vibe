import { useLoaderData } from "react-router-dom"
import Books from "../components/Books"
import Hero from "../components/Hero"

const Home = () => {
	const books = useLoaderData()
	// console.log(books)
	return (
		<div className='mt-8 mx-4'>
			<Hero />
			<Books books={books} />
		</div>
	)
}

export default Home
