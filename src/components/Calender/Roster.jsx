import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

const Roster = ({ userId, userToken, activityId }) => {
	const { data: rosterData } = useFetch({
		endpoint: `/api/v1/users/${userId}/roster/${activityId}`,
		authToken: userToken,
	});

	if (!rosterData) return <Loader />;

	return (
		<ul className="flex flex-col gap-2">
			{rosterData.map(({ firstname, lastname }, i) => {
				return <li key={i}>{`${firstname} ${lastname}`}</li>;
			})}
		</ul>
	);
};

export default Roster;
