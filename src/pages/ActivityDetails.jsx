import { useParams } from "react-router-dom";

const AcitivityDetail = () => {
	const { id } = useParams();
	console.log(id);
	return <></>;
};

export default AcitivityDetail;
