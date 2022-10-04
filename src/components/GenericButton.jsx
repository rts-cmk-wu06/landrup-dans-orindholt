import { Link } from "react-router-dom";

const GenericButton = ({
	type = "button",
	text,
	anchor,
	click = () => {},
	className = "",
	style = {},
}) => {
	const computedStyling = `bg-purple text-white w-64 h-14 rounded-[10px] grid place-content-center pb-1 shadow-md ${className}`;
	return !anchor ? (
		<button
			aria-label={type}
			style={style}
			type={type}
			className={computedStyling}
			onClick={click}
		>
			{text}
		</button>
	) : (
		<Link
			style={style}
			to={anchor}
			aria-label={`Go to ${anchor.replace("/", "")} page`}
			className={computedStyling}
		>
			{text}
		</Link>
	);
};

export default GenericButton;
