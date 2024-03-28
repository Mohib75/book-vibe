import BookCard from "./BookCard"
import PropTypes from "prop-types"
import Button from "./Button"
import { Link } from "react-router-dom"

const Books = ({ books }) => {
	return (
		<div className='flex flex-col my-12'>
			<h3 className='text-[40px] font-bold leading-[53px] text-center text-black'>Books</h3>
			<div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-4'>
				{books && books.slice(0, 3).map((book, index) => <BookCard key={index} book={book} />)}
			</div>
			<Link to='/allBooks' className='self-center'>
				<Button
					className='btn rounded-lg bg-[#23BE0A] text-white w-[189px] text-xl font-bold leading-5 hover:bg-[#23BE0A] hover:scale-105 transform transition-all duration-500 mt-8'
					text='Show All Books'
				/>
			</Link>
		</div>
	)
}

export default Books

Books.propTypes = {
	books: PropTypes.array,
}
