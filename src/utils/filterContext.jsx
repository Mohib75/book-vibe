import PropTypes from "prop-types"

import { createContext, useContext, useState } from "react"

export const FilterContext = createContext()

export const useFilter = () => useContext(FilterContext)

export const FilterProvider = ({ children }) => {
	const [filter, setFilter] = useState("all")

	return <FilterContext.Provider value={{ filter, setFilter }}>{children}</FilterContext.Provider>
}

FilterProvider.propTypes = {
	children: PropTypes.any,
}
