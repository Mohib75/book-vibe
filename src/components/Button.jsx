import PropTypes from "prop-types"

const Button = ({ className, text, onClick }) => {
	return (
		<button onClick={onClick} className={className}>
			{text}
		</button>
	)
}

export default Button

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
	onClick: PropTypes.func,
}
