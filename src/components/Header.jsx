import { useLocation } from "react-router-dom";
import capitalizeString from "../util/capitalizeString";

const Header = () => {
	const { pathname } = useLocation();

	return (
		<header>
			<h1 className="text-xl">
				{capitalizeString(pathname.replace("/", "")).replace(/oe/i, "ø")}
			</h1>
		</header>
	);
};

export default Header;
