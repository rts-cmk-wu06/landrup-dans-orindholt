import { useLocation } from "react-router-dom";
import Navbar from "./Navigation/Navbar";

const Header = () => {
	const { pathname } = useLocation();

	return (
		<header>
			<Navbar />
			<h1>{pathname.replace("/", "")}</h1>
		</header>
	);
};

export default Header;
