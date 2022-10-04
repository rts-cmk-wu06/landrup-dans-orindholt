import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	const footerCondition = pathname !== "/" && pathname !== "login";

	return (
		<>
			<main
				className={`min-h-screen flex flex-col ${
					footerCondition ? "pb-16" : ""
				}`}
			>
				{children}
			</main>
			{footerCondition && <Footer />}
		</>
	);
};

export default Layout;
