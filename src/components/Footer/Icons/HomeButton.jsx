import { Link } from "react-router-dom";

const HomeButton = ({ to = "/" }) => {
	return (
		<Link to={to}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="41"
				height="41"
				fill="none"
				viewBox="0 0 41 41"
			>
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M12 16l9-7 9 7v11a2 2 0 01-2 2H14a2 2 0 01-2-2V16z"
				></path>
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M18 29V19h6v10"
				></path>
				<circle cx="20.5" cy="20.5" r="20" stroke="#000"></circle>
			</svg>
		</Link>
	);
};

export default HomeButton;
