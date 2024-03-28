import toast from "react-hot-toast"

export const getBooks = (data) => {
	const storedBooks = localStorage.getItem(data)
	if (storedBooks) {
		return JSON.parse(storedBooks)
	}
	return []
}
export const saveBook = (id, data) => {
	const storedBooks = getBooks(data)
	const exists = storedBooks.find((bookId) => bookId === id)
	if (!exists) {
		storedBooks.push(id)
		localStorage.setItem(data, JSON.stringify(storedBooks))
		toast.success("Book added Successfully!")
	} else {
		return toast.error("Already added")
	}
}

export const checkReadBooks = (id) => {
	const storedBooks = getBooks("read-books")
	const exists = storedBooks.find((bookId) => bookId === id)

	return exists
}
