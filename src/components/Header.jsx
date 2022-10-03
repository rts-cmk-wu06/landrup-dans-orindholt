import { useLocation } from "react-router-dom";
import capitalizeString from "../util/capitalizeString";

const Header = () => {
	const { pathname } = useLocation();

	return (
		<header className="pb-4">
			<h1 className="text-xl">{capitalizeString(pathname.replace("/", ""))}</h1>
		</header>
	);
};

export default Header;
