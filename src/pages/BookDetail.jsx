import { useLoaderData, useParams } from "react-router-dom"
import Button from "../components/Button"
import { checkReadBooks, saveBook } from "../utils"
import toast from "react-hot-toast"

const BookDetail = () => {
	const books = useLoaderData()
	const { id } = useParams()
	const idInt = parseInt(id)
	const book = books.find((book) => book.bookId === idInt)

	const handleRead = () => {
		saveBook(idInt, "read-books")
	}

	const handleWishlist = () => {
		if (checkReadBooks(idInt)) {
			toast.error("Already added in the read book")
		} else {
			saveBook(idInt, "wishlist")
		}
	}
	return (
		<div className='flex flex-col lg:flex-row gap-4 sm:max-w-full justify-between mt-6 mx-4'>
			<div className='lg:h-[711px] bg-[#1313130D] rounded-2xl lg:w-[48%] flex justify-center items-center p-4 lg:p-0'>
				<img src={book.image} className='max-w-40 sm:max-w-sm rounded-lg shadow-2xl' />
			</div>
			<div className='flex flex-col lg:w-[48%]'>
				<h2 className='card-title text-2xl sm:text-4xl font-bold text-black leading-[53px]'>{book.bookName}</h2>
				<p className='text-[#131313CC] text-xl  font-medium leading-6 my-8'>By :{book.author}</p>
				<hr className='h-[1px] border-solid border-[#13131326] w-full' />
				<p className='text-[#131313CC] text-xl font-medium leading-6 my-8'>{book.category}</p>
				<hr className='h-[1px] border-solid border-[#13131326] w-full' />
				<p className='text-[#131313CC] leading-6 my-8'>
					<span className='text-black font-bold'>Review: </span>
					{book.review}
				</p>

				<div className='grid grid-cols-2 sm:flex sm:items-center gap-4 mt-4'>
					<p className='text-black leading-6 font-bold pl-8 sm:pl-0'>Tag</p>
					{book.tags &&
						book.tags.map((tag, index) => (
							<div key={index} className='bg-[#23BE0A0D] text-sm flex justify-center items-center rounded-[30px] p-2 px-8 w-[100px]'>
								<p className='text-[#23BE0A] font-medium leading-5'>#{tag}</p>
							</div>
						))}
				</div>

				<hr className='h-[1px] border-solid border-[#13131326] w-full my-8' />
				<div className='sm:w-80 flex flex-col'>
					<div className='flex justify-between items-center text-xs sm:text-base'>
						<p className='leading-6 text-[#131313B3]'>Number of Pages:</p>
						<p className='leading-6 text-black font-semibold'>{book.totalPages}</p>
					</div>
					<div className='flex justify-between items-center text-xs sm:text-base'>
						<p className='leading-6 text-[#131313B3]'>Publisher:</p>
						<p className='leading-6 text-black font-semibold'>{book.publisher}</p>
					</div>
					<div className='flex justify-between items-center text-xs sm:text-base'>
						<p className='leading-6 text-[#131313B3]'>Year of Publishing:</p>
						<p className='leading-6 text-black font-semibold'>{book.yearOfPublishing}</p>
					</div>
					<div className='flex justify-between items-center text-xs sm:text-base'>
						<p className='leading-6 text-[#131313B3]'>Rating:</p>
						<p className='leading-6 text-black font-semibold'>{book.rating}</p>
					</div>
				</div>

				<div className='flex gap-4 my-8 items-center self-center sm:self-start'>
					<Button
						onClick={handleRead}
						className='btn rounded-lg bg-white w-[116px] text-lg text-black font-semibold leading-5 border-[1px] border-[#1313134D] hover:text-white hover:bg-[#50B1C9] hover:scale-105 transform transition-all duration-500'
						text='Read'
					/>
					<Button
						onClick={handleWishlist}
						className='btn rounded-lg bg-white w-[116px] text-lg text-black font-semibold leading-5 border-[1px] border-[#1313134D] hover:text-white hover:bg-[#50B1C9] hover:scale-105 transform transition-all duration-500'
						text='Wishlist'
					/>
				</div>
			</div>
		</div>
	)
}

export default BookDetail
