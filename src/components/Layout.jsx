import Footer from "./Footer";
import Header from "./Header";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	if (!pathname) return null;

	const locationCondition = pathname !== "/";
	console.log(locationCondition);

	return (
		<>
			{locationCondition && <Header />}
			<main className={`min-h-screen ${locationCondition ? "pt-12" : ""}`}>
				{children}
			</main>
			{locationCondition && <Footer />}
		</>
	);
};

export default Layout;
