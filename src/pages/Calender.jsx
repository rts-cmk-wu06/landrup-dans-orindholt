import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";
import { userContext } from "../util/UserContext";
import useFetch from "../hooks/useFetch";
import CalenderItem from "../components/Calender/CalenderItem";
import Loader from "../components/Loader";

const Calender = () => {
	const navigate = useNavigate();
	const {
		userData: { get: contextUserData },
	} = useContext(userContext);

	const { data: userData, callFetch: getUserData } = useFetch({
		endpoint: `/api/v1/users/${contextUserData?.userId}`,
		authToken: contextUserData?.token,
		fetchOnInit: false,
	});

	useEffect(() => {
		if (!contextUserData) {
			navigate("/login");
			return;
		}
		getUserData();
	}, []);

	if (!userData) return <Loader />;

	return (
		<Section>
			<MainHeading />
			<ul className="flex flex-col gap-4 mt-4">
				{userData.activities.map(activity => {
					return <CalenderItem activity={activity} key={activity.id} />;
				})}
			</ul>
		</Section>
	);
};

export default Calender;
