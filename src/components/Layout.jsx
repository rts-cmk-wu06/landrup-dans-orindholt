import Footer from "./Footer/Footer";
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
	const { pathname } = useLocation();

	const footerCondition = pathname !== "/" && pathname !== "/login";

	return (
		<>
			<main
				className={`min-h-screen flex flex-col relative ${
					footerCondition ? "pb-16" : ""
				}`}
			>
				{children}
				<ToastContainer
					position="top-left"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss={false}
					draggable={false}
					pauseOnHover={false}
					limit={1}
				/>
			</main>
			{footerCondition && <Footer />}
		</>
	);
};

export default Layout;
