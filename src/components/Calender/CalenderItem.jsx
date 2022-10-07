import { Link } from "react-router-dom";
import capitalizeString from "../../util/capitalizeString";

const CalenderItem = ({ activity: { name, weekday, time, id } }) => {
	return (
		<li className="bg-gray text-black rounded-lg  flex flex-col justify-center">
			<Link to={`/kalender/${id}?name=${name}`} className="px-7 py-5">
				<h3 className="text-xl text-ellipsis whitespace-nowrap leading-snug overflow-hidden -mt-1">
					{name}
				</h3>
				<p className="leading-tight">{`${capitalizeString(
					weekday
				)} ${time}`}</p>
			</Link>
		</li>
	);
};

export default CalenderItem;
