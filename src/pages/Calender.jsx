import { useContext } from "react";
import CalenderItem from "../components/Calender/CalenderItem";
import Loader from "../components/Loader";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";
import useFetch from "../hooks/useFetch";
import { userContext } from "../util/UserContext";

const Calender = () => {
	const {
		userData: {
			get: { userId, token },
		},
	} = useContext(userContext);
	const { data } = useFetch({
		endpoint: `/api/v1/users/${userId}`,
		authToken: token,
	});

	if (!data) return <Loader />;

	return (
		<Section>
			<MainHeading />
			<ul className="flex flex-col gap-4 mt-4">
				{data.activities.map(activity => {
					return <CalenderItem activity={activity} key={activity.id} />;
				})}
			</ul>
		</Section>
	);
};

export default Calender;
