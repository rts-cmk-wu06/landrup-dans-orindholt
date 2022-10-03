import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="fixed top-0 left-0 right-0 h-12">
			<ul className="flex gap-4">
				<li>
					<Link to="/">Link 1</Link>
				</li>
				<li>
					<Link to="/">Link 2</Link>
				</li>
				<li>
					<Link to="/">Link 3</Link>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
