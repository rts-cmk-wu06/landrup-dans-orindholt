import { useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="m-auto text-center">
				<h1 className="text-lg">This page doesn't exist</h1>
				<BackButton />
			</div>
		</>
	);
};

export default NotFound;
