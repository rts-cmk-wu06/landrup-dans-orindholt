import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import acitvityAge from "../util/activityAge";
import GenericButton from "../components/GenericButton";
import Loader from "../components/Loader";

const AcitivityDetail = () => {
	const { id } = useParams();
	const { data } = useFetch({ endpoint: `/api/v1/activities/${id}` });

	if (!data) return <Loader />;
	const {
		asset: { url: assetUrl },
		assetId,
		minAge,
		maxAge,
		name,
		description,
	} = data;

	return (
		<>
			<div className="relative grid h-[60vh] overflow-hidden">
				<img
					src={assetUrl}
					alt={assetId}
					className="w-full h-full object-cover object-center"
				/>
				<GenericButton
					className="absolute bottom-6 right-6 shadow-base"
					text="Tilmeld"
					anchor="/login"
				/>
			</div>
			<div className="px-7 py-5 h-full">
				<h2 className="text-lg leading-none">{name}</h2>
				<p>{acitvityAge(minAge, maxAge)}</p>
				<p className="mt-2">{description}</p>
			</div>
		</>
	);
};

export default AcitivityDetail;
