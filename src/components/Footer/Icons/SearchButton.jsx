import { Link } from "react-router-dom";

const SearchButton = ({ to = "/" }) => {
	return (
		<Link to={to}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="41"
				height="41"
				fill="none"
				viewBox="0 0 41 41"
			>
				<circle cx="20.5" cy="20.5" r="20" stroke="#000"></circle>
				<path
					stroke="#000"
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M19 27a8 8 0 100-16 8 8 0 000 16zM29 29l-4.35-4.35"
				></path>
			</svg>
		</Link>
	);
};

export default SearchButton;
