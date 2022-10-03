import { Link } from "react-router-dom";

const GenericButton = ({
	text,
	anchor,
	click = () => {},
	className = "",
	style = {},
}) => {
	const computedStyling = `bg-purple text-white w-64 h-14 rounded-lg grid place-content-center pb-1 shadow-md ${className}`;
	return !anchor ? (
		<button
			style={style}
			type="button"
			className={computedStyling}
			onClick={click}
		>
			{text}
		</button>
	) : (
		<Link style={style} to={anchor} className={computedStyling}>
			{text}
		</Link>
	);
};

export default GenericButton;
