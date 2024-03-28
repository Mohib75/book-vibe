import { useEffect, useState } from "react"
import { getBooks } from "../utils"
import { useLoaderData } from "react-router-dom"
import { Bar, BarChart, CartesianGrid, Cell, XAxis, YAxis } from "recharts"
import PropTypes from "prop-types"

const getPath = (x, y, width, height) => {
	return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
  ${x + width / 2}, ${y}
  C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
  Z`
}

const TriangleBar = (props) => {
	const { fill, x, y, width, height } = props

	return <path d={getPath(x, y, width, height)} stroke='none' fill={fill} />
}

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"]

const PagesToRead = () => {
	const books = useLoaderData()
	const [booksRead, setBooksRead] = useState([])

	useEffect(() => {
		const storedBookId = getBooks("read-books")
		if (books.length > 0) {
			const readBook = []
			for (const id of storedBookId) {
				const book = books.find((book) => book.bookId === id)
				if (book) {
					readBook.push(book)
				}
			}
			setBooksRead(readBook)
		}
	}, [books])

	return (
		<>
			<div className='bg-[#13131308] rounded-3xl w-full h-[800px]'>
				<BarChart
					className='!w-full !h-full'
					width={600}
					height={300}
					data={booksRead}
					margin={{
						top: 20,
						right: 30,
						left: 20,
						bottom: 5,
					}}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='bookName' />
					<YAxis />
					<Bar dataKey='totalPages' fill='#8884d8' shape={<TriangleBar />} label={{ position: "top" }}>
						{booksRead.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={colors[index % 20]} />
						))}
					</Bar>
				</BarChart>
			</div>
		</>
	)
}

export default PagesToRead

TriangleBar.propTypes = {
	fill: PropTypes.object,
	x: PropTypes.object,
	y: PropTypes.object,
	width: PropTypes.object,
	height: PropTypes.object,
}
