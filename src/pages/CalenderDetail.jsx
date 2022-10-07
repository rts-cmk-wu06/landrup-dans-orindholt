import { useContext, useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { userContext } from "../util/UserContext";
import Loader from "../components/Loader";
import { useNavigate } from "react-router-dom";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";

const CalenderRoster = () => {
	const { id: activityId } = useParams();
	const [searchParams] = useSearchParams();

	const navigate = useNavigate();
	const {
		userData: { get: contextUserData },
	} = useContext(userContext);

	const { data: rosterData, callFetch: getRosterData } = useFetch({
		endpoint: `/api/v1/users/${contextUserData?.userId}/roster/${activityId}`,
		authToken: contextUserData?.token,
		fetchOnInit: false,
	});

	useEffect(() => {
		if (!contextUserData) {
			navigate("/login");
			return;
		}
		const isInstructor = contextUserData?.role === "instructor";
		if (!isInstructor) {
			navigate(`/aktiviteter/${activityId}`);
			return;
		}
		getRosterData();
	}, []);

	if (!rosterData) return <Loader />;

	return (
		<Section>
			<MainHeading text={searchParams.get("name")} />
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
		</Section>
	);
};

export default CalenderRoster;
