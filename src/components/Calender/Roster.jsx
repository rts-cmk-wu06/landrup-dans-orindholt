import useFetch from "../../hooks/useFetch";
import Loader from "../Loader";

const Roster = ({ userId, userToken, activityId }) => {
	const { data: rosterData } = useFetch({
		endpoint: `/api/v1/users/${userId}/roster/${activityId}`,
		authToken: userToken,
	});

	if (!rosterData) return <Loader />;

	return (
		<>
			{rosterData.length ? (
				<ul className="flex flex-col gap-2">
					{rosterData.map(({ firstname, lastname }, i) => {
						return <li key={i}>{`${firstname} ${lastname}`}</li>;
					})}
				</ul>
			) : (
				<p className="text-center py-10">
					Denne aktivitet har desværre ingen medlemmere endnu.
				</p>
			)}
		</>
	);
};

export default Roster;
