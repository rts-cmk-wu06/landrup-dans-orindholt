import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	if (!pathname) return null;

	const footerCondition = pathname !== "/" && pathname !== "login";
	const headerCondition = footerCondition && !pathname.includes("aktiviteter/");

	console.log(headerCondition);

	return (
		<>
			<main
				className={`min-h-screen flex flex-col ${
					footerCondition ? "px-7 py-8" : ""
				}`}
			>
				{headerCondition && <Header />}
				{children}
			</main>
			{headerCondition && <Footer />}
		</>
	);
};

export default Layout;
