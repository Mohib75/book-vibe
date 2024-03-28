import { useState } from "react"
import { FaAngleDown } from "react-icons/fa6"
import { Link, Outlet } from "react-router-dom"
import { useFilter } from "../utils/filterContext"

const ListedBooks = () => {
	const [tabIndex, setTabIndex] = useState(0)
	const { filter, setFilter } = useFilter()

	const handleFilter = (data) => {
		setFilter(data)
	}
	return (
		<div className='flex flex-col mx-4'>
			<div className='h-[100px] bg-[#1313130D] rounded-2xl flex justify-center items-center'>
				<h2 className='text-black text-2xl font-bold leading-8'>Books</h2>
			</div>

			<div className='dropdown self-center my-8'>
				<div
					tabIndex={0}
					role='button'
					className='btn rounded-lg bg-[#23BE0A] text-white w-[140px] text-lg font-semibold leading-5 hover:bg-[#23BE0A] hover:opacity-70 transition-all duration-500'>
					Sort By
					<FaAngleDown />
				</div>
				<ul tabIndex={0} className='dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52'>
					<li onClick={() => handleFilter("numberOfPages")}>
						<a> Number of pages</a>
					</li>
					<li onClick={() => handleFilter("rating")}>
						<a>Rating</a>
					</li>
					<li onClick={() => handleFilter("publishedYear")}>
						<a> Published year</a>
					</li>
				</ul>
			</div>

			{/* the tabs */}
			<div className='flex flex-nowrap border-b-[1.5px] border-gray-400'>
				<Link
					to={``}
					onClick={() => setTabIndex(0)}
					rel='noopener noreferrer'
					className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${
						tabIndex === 0 ? "border border-b-0 rounded-tr-md rounded-tl-md" : ""
					}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'>
						<path d='M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'></path>
					</svg>
					<span className='text-xs sm:text-base'>Read Books</span>
				</Link>
				<Link
					to={`wishlist`}
					onClick={() => setTabIndex(1)}
					rel='noopener noreferrer'
					className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 border-gray-400 ${
						tabIndex === 1 ? "border border-b-0 rounded-tr-md rounded-tl-md" : ""
					}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='w-4 h-4'>
						<path d='M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z'></path>
						<path d='M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z'></path>
					</svg>
					<span className='text-xs sm:text-base'>Wishlist Books</span>
				</Link>
			</div>
			<Outlet />
		</div>
	)
}

export default ListedBooks
