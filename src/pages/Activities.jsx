import ActivityList from "../components/Activities/ActivityList";
import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";

const Activities = () => {
	const { data } = useFetch({ endpoint: "/api/v1/activities" });

	if (!data) return <Loader />;
	return (
		<>
			<ActivityList data={data} />
		</>
	);
};

export default Activities;
