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
		userData: {
			get: { userId, token },
		},
	} = useContext(userContext);

	const { data } = useFetch({
		endpoint: `/api/v1/users/${userId}/roster/${id}`,
		authToken: token,
	});

	if (!data) return <Loader />;

	return (
		<Section>
			<MainHeading text={data[0].activity} />
			<ul>
				{data.map(({ firstname, lastname }, i) => {
					return <li key={i}>{`${firstname} ${lastname}`}</li>;
				})}
			</ul>
		</Section>
	);
};

export default CalenderDetail;
