import { useEffect } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CalenderItem from "../components/Calender/CalenderItem";
import Loader from "../components/Loader";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";
import useFetch from "../hooks/useFetch";
import { userContext } from "../util/UserContext";

const Calender = () => {
	const navigate = useNavigate();
	const {
		userData: { get: userData },
	} = useContext(userContext);
	const { data: apiData, callback: getUserData } = useFetch({
		endpoint: `/api/v1/users/${userData?.userId}`,
		authToken: userData?.token,
		fetchOnInit: false,
	});

	useEffect(() => {
		if (!userData) {
			navigate("/login");
			return;
		}
		getUserData();
	}, []);

	if (!apiData) return <Loader />;

	return (
		<Section>
			<MainHeading />
			<ul className="flex flex-col gap-4 mt-4">
				{apiData.activities.map(activity => {
					return <CalenderItem activity={activity} key={activity.id} />;
				})}
			</ul>
		</Section>
	);
};

export default Calender;
