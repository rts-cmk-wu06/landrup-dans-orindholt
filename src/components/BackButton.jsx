import { useNavigate } from "react-router-dom";

const BackButton = () => {
	const navigate = useNavigate();
	return (
		<button
			type="button"
			className="absolute top-0 left-6 text-2xl"
			onClick={() => navigate("/aktiviteter")}
		>
			&larr;
		</button>
	);
};

export default BackButton;
