import { Link } from "react-router-dom";
import acitvityAge from "../../util/activityAge";

const Activity = ({
	activity: {
		asset: { url: assetUrl },
		id,
		assetId,
		name,
		minAge,
		maxAge,
	},
}) => {
	return (
		<li className="w-auto h-full aspect-square rounded-[2.5rem] rounded-br-none overflow-hidden">
			<Link to={`/aktiviteter/${id}`}>
				<figure className="h-full relative text-black">
					<img
						src={assetUrl}
						alt={`${name} ${assetId}`}
						className="h-full w-full object-cover"
					/>
					<figcaption className="absolute bottom-0 left-0 right-0 bg-pink bg-opacity-80 h-24 rounded-tr-[2.5rem] flex flex-col justify-center px-6">
						<h3>{name}</h3>
						<p aria-label="age limit">{acitvityAge(minAge, maxAge)}</p>
					</figcaption>
				</figure>
			</Link>
		</li>
	);
};

export default Activity;
