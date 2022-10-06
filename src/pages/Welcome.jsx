import GenericButton from "../components/GenericButton";
import background from "../assets/splash-image.jpg";
import logo from "../assets/logo.png";

const Welcome = () => {
	return (
		<div
			className="h-screen bg-cover bg-center"
			style={{ backgroundImage: `url(${background})` }}
		>
			<div className="h-full flex flex-col justify-end py-20 gap-[30%]">
				<div className="w-3/5">
					<img src={logo} alt="Landrup Dans Logo" />
				</div>
				<GenericButton
					anchor="/aktiviteter"
					text="Kom i gang"
					style={{ opacity: 0 }}
					className="mx-auto animate-fadeIn shadow-base"
				/>
			</div>
		</div>
	);
};

export default Welcome;
