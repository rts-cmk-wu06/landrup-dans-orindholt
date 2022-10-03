import Activity from "../components/Activities/Activity";
import Loader from "../components/Loader";
import useFetch from "../hooks/useFetch";

const Activities = () => {
	const { data } = useFetch({ endpoint: "/api/v1/activities" });

	if (!data) return <Loader />;

	return (
		<>
			<ul className="flex flex-col gap-8 py-4">
				{data.map(activity => {
					return <Activity key={activity.id} activity={activity} />;
				})}
			</ul>
		</>
	);
};

export default Activities;
