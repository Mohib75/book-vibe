import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { CiStar } from "react-icons/ci"

const BookCard = ({ book }) => {
	console.log()
	const { bookId, image, tags, bookName, author, category, rating } = book
	return (
		<div className='card sm:w-96 bg-base-100 p-6 border-[1px] border-[#13131326] border-solid rounded-2xl'>
			<Link to={`/bookDetail/${bookId}`}>
				<figure className='w-full bg-[#F3F3F3] py-4 rounded-xl h-[230px]'>
					<img src={image} alt='Shoes' className='w-32 h-full object-cover' />
				</figure>
				<div className='grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4'>
					{tags &&
						tags.map((tag, index) => (
							<div key={index} className='bg-[#23BE0A0D] text-sm flex justify-center items-center rounded-[30px] p-2 px-8 w-[100px]'>
								<p className='text-[#23BE0A] font-medium leading-5'>{tag}</p>
							</div>
						))}
				</div>
				<div className='card-body p-0 mt-4'>
					<h2 className='card-title text-2xl font-bold text-black leading-8'>{bookName}</h2>
					<p className='text-[#131313CC] font-medium leading-5 mt-2'>By :{author}</p>
					<hr className='w-full border-[1px] border-dashed border-[#13131326] mt-4' />
					<div className='flex justify-between items-center'>
						<p className='text-[#131313CC] font-medium leading-5'>{category}</p>
						<div className='flex gap-2 items-center'>
							<p className='text-[#131313CC] font-medium leading-5'>{rating}</p>
							<CiStar />
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export default BookCard

BookCard.propTypes = {
	book: PropTypes.object,
}
