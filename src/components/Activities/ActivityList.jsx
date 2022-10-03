import Activity from "./Activity";

const ActivityList = ({ data }) => {
	return (
		<ul className="flex flex-col gap-8 py-4">
			{data.map(activity => {
				return <Activity key={activity.id} activity={activity} />;
			})}
		</ul>
	);
};

export default ActivityList;
