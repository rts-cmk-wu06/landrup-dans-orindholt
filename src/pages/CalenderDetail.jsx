import { useContext } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";
import useFetch from "../hooks/useFetch";
import { userContext } from "../util/UserContext";

const CalenderDetail = () => {
	const { id } = useParams();
	const {
		userData: { get: userData },
	} = useContext(userContext);

	const { data: rosterData } = useFetch({
		endpoint: `/api/v1/users/${userData?.userId}/roster/${id}`,
		authToken: token,
	});

	if (!rosterData) return <Loader />;

	return (
		<Section>
			<MainHeading text={rosterData[0].activity} />
			<ul>
				{rosterData.map(({ firstname, lastname }, i) => {
					return <li key={i}>{`${firstname} ${lastname}`}</li>;
				})}
			</ul>
		</Section>
	);
};

export default CalenderDetail;
