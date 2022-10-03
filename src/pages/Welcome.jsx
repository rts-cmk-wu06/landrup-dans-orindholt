import logo from "../assets/Logo.png";
import GenericButton from "../components/GenericButton";

const Welcome = () => {
	return (
		<div>
			<img src={logo} alt="Landrup Dans Logo" />
			<GenericButton anchor="/home" text="Kom i gang" />
		</div>
	);
};

export default Welcome;
