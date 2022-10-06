import { useContext } from "react";
import { useParams } from "react-router-dom";
import Roster from "../components/Calender/Roster";
import Section from "../components/Section";
import useFetch from "../hooks/useFetch";
import { userContext } from "../util/UserContext";
import Loader from "../components/Loader";
import Details from "../components/Calender/Details";
import MainHeading from "../components/MainHeading";

const CalenderDetail = () => {
	const { id: activityId } = useParams();
	const {
		userData: { get: userData },
	} = useContext(userContext);

	const { data: activityData } = useFetch({
		endpoint: `/api/v1/activities/${activityId}`,
	});

	if (!activityData) return <Loader />;

	const isInstructor = userData?.role === "instructor";

	return (
		<Section>
			<MainHeading text={activityData.name} />
			<div className="py-2">
				{isInstructor ? (
					<Roster
						userId={userData.userId}
						userToken={userData.token}
						activityId={activityId}
					/>
				) : (
					<Details activity={activityData} />
				)}
			</div>
		</Section>
	);
};

export default CalenderDetail;
