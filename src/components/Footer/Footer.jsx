import CalenderButton from "./Icons/CalenderButton";
import HomeButton from "./Icons/HomeButton";
import SearchButton from "./Icons/SearchButton";

const Footer = () => {
	return (
		<footer className="fixed bottom-0 left-0 right-0 h-16 bg-gray flex">
			<nav className="my-auto w-full px-8">
				<ul className="flex justify-between">
					<li>
						<HomeButton to="/aktiviteter" />
					</li>
					<li>
						<SearchButton to="/soeg" />
					</li>
					<li>
						<CalenderButton to="/kalender" />
					</li>
				</ul>
			</nav>
		</footer>
	);
};

export default Footer;
