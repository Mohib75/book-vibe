import PropTypes from "prop-types"

const Button = ({ className, text }) => {
	return <a className={className}>{text}</a>
}

export default Button

Button.propTypes = {
	className: PropTypes.string,
	text: PropTypes.string,
}
