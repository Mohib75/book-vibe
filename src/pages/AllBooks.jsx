import { useLoaderData } from "react-router-dom"
import BookCard from "../components/BookCard"

const AllBooks = () => {
	const books = useLoaderData()
	return (
		<div className='flex flex-col my-12 mx-4'>
			<h3 className='text-[40px] font-bold leading-[53px] text-center text-black'>Books</h3>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4'>
				{books && books.map((book, index) => <BookCard key={index} book={book} />)}
			</div>
		</div>
	)
}

export default AllBooks
