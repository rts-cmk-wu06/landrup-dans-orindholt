import { useLocation } from "react-router-dom";
import capitalizeString from "../util/capitalizeString";

const MainHeading = ({ text = "", className = "" }) => {
	const { pathname } = useLocation();
	return (
		<h1
			className={`text-xl text-ellipsis whitespace-nowrap overflow-hidden ${className}`}
		>
			{!text
				? capitalizeString(pathname.replace("/", "")).replace(/oe/i, "ø")
				: text}
		</h1>
	);
};

export default MainHeading;
