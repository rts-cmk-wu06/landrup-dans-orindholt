import activityAge from "../../util/activityAge";
import capitalizeString from "../../util/capitalizeString";

const Details = ({
	activity: { minAge, maxAge, description, weekday, time },
}) => {
	return (
		<>
			<div className="text-lg">
				<p>{activityAge(minAge, maxAge)}</p>
				<p>
					{capitalizeString(weekday)} - {time}
				</p>
			</div>
			<p className="pt-2">{description}</p>
		</>
	);
};

export default Details;
