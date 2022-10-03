import { Link } from "react-router-dom";

const GenericButton = ({
	text,
	anchor,
	click = () => {},
	className = "bg-purple text-white w-64 h-14 rounded-lg grid place-content-center pb-1",
}) => {
	return !anchor ? (
		<button type="button" className={className} onClick={click}>
			{text}
		</button>
	) : (
		<Link to={anchor} className={className}>
			{text}
		</Link>
	);
};

export default GenericButton;
