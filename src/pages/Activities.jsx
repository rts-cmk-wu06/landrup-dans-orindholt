import ActivityList from "../components/Activities/ActivityList";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import MainHeading from "../components/MainHeading";
import Section from "../components/Section";

const Activities = () => {
	const { data } = useFetch({ endpoint: "/api/v1/activities" });

	if (!data) return <Loader />;
	return (
		<>
			<Section>
				<MainHeading />
				<ActivityList data={data} />
			</Section>
		</>
	);
};

export default Activities;
