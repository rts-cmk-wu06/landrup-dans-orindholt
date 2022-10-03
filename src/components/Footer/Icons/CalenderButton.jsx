import { Link } from "react-router-dom";

const CalenderButton = ({ to = "/" }) => {
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
					d="M28 12H14a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V14a2 2 0 00-2-2zM25 10v4M17 10v4M12 18h18"
				></path>
			</svg>
		</Link>
	);
};

export default CalenderButton;
