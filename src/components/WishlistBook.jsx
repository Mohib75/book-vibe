import { useEffect, useState } from "react"
import { Link, useLoaderData } from "react-router-dom"
import { getBooks } from "../utils"
import { CiLocationOn } from "react-icons/ci"
import { IoPeopleOutline } from "react-icons/io5"
import { MdOutlineContactPage } from "react-icons/md"
import Button from "./Button"
import { useFilter } from "../utils/filterContext"

const WishlistBook = () => {
	const { filter } = useFilter()
	const books = useLoaderData()
	const [wishlist, setWishlist] = useState([])
	const [displayWishList, setDisplayWishlist] = useState([])

	useEffect(() => {
		if (filter === "all") {
			setDisplayWishlist(wishlist)
		} else if (filter === "numberOfPages") {
			const sortedBooks = wishlist.slice().sort((a, b) => b.totalPages - a.totalPages)
			setDisplayWishlist(sortedBooks)
		} else if (filter === "rating") {
			const sortedBooks = [...wishlist].sort((a, b) => b.rating - a.rating)
			setDisplayWishlist(sortedBooks)
		} else if (filter === "publishedYear") {
			const sortedBooks = wishlist.slice().sort((a, b) => b.yearOfPublishing - a.yearOfPublishing)
			setDisplayWishlist(sortedBooks)
		}
	}, [filter, wishlist])

	useEffect(() => {
		const storedBookId = getBooks("wishlist")
		if (books.length > 0) {
			const wishlistBook = []
			for (const id of storedBookId) {
				const book = books.find((book) => book.bookId === id)
				if (book) {
					wishlistBook.push(book)
				}
			}

			setWishlist(wishlistBook)
			setDisplayWishlist(wishlistBook)
		}
	}, [books])
	return (
		<>
			{displayWishList &&
				displayWishList.map((book, index) => (
					<div
						key={index}
						className='lg:h-[300px] border-[1px] border-[#13131326] border-solid flex flex-col lg:flex-row gap-4 my-4 rounded-2xl p-4'>
						<figure className='bg-[#F3F3F3] py-4 rounded-xl sm:w-[230px] flex justify-center items-center'>
							<div className='w-32'>
								<img src={book.image} alt='Shoes' className='w-full h-full object-cover' />
							</div>
						</figure>

						<div className='flex flex-col flex-1 gap-2'>
							<div className='flex flex-col'>
								<h2 className='card-title text-2xl font-bold text-black leading-8 self-center sm:self-start'>{book.bookName}</h2>
								<p className='text-[#131313CC] font-medium leading-5 mt-2 self-center sm:self-start'>By :{book.author}</p>
								<div className='flex flex-col lg:flex-row items-center gap-2 lg:gap-8'>
									<div className='grid grid-cols-2 sm:flex sm:items-center gap-4 my-4'>
										<p className='text-black leading-6 font-bold pl-8 sm:pl-0'>Tag</p>
										{book.tags &&
											book.tags.map((tag, index) => (
												<div
													key={index}
													className='bg-[#23BE0A0D] text-sm flex justify-center items-center rounded-[30px] p-2 px-8 w-[100px]'>
													<p className='text-[#23BE0A] font-medium leading-5'>{tag}</p>
												</div>
											))}
									</div>

									<div className='flex gap-2 items-center'>
										<CiLocationOn />
										<p className='text-[#131313CC] leading-5 text-xs sm:text-base'>Year of Publishing: {book.yearOfPublishing}</p>
									</div>
								</div>
							</div>

							<div className='flex gap-8 items-center'>
								<div className='flex gap-2 items-center'>
									<IoPeopleOutline />
									<p className='text-[#131313CC] text-xs sm:text-base leading-5'>Publisher: {book.publisher}</p>
								</div>
								<div className='flex gap-2 items-center'>
									<MdOutlineContactPage />
									<p className='text-[#131313CC] leading-5 text-xs sm:text-base'>Page {book.totalPages}</p>
								</div>
							</div>

							<hr className='border-[1px] w-full border-[#13131326] border-solid my-2' />

							<div className='grid grid-cols-1 place-items-center sm:grid-cols-3 gap-8'>
								<div className='w-[170px] p-4 rounded-[30px] bg-[#328EFF26] text-[#328EFF] flex justify-center items-center leading-5'>
									<p>Category: {book.category}</p>
								</div>

								<div className='w-[170px] p-4 rounded-[30px] bg-[#FFAC3326] text-[#FFAC33] flex justify-center items-center leading-5'>
									<p>Rating: {book.rating}</p>
								</div>

								<Link to={`/bookDetail/${book.bookId}`}>
									<Button
										className='btn rounded-[30px] bg-[#23BE0A] w-[140px] text-white font-semibold leading-5 border-[1px] border-[#1313134D] hover:text-white hover:bg-[#23BE0A] hover:scale-105 transform transition-all duration-500'
										text='View Details'
									/>
								</Link>
							</div>
						</div>
					</div>
				))}
		</>
	)
}

export default WishlistBook
