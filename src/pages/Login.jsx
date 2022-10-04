import GenericButton from "../components/GenericButton";
import background from "../assets/splash-image.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string } from "yup";
import useFetch from "../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import Loader from "../components/Loader";
import { userContext } from "../util/UserContext";
import { useNavigate } from "react-router-dom";

const validationSchema = object({
	username: string().required("You need to enter a username"),
	password: string().required("You need to enter a password"),
});

const Login = () => {
	const [formValidated, setFormValidated] = useState(false);
	const navigate = useNavigate();
	const {
		userData: { set: setUserData },
	} = useContext(userContext);
	const {
		data: apiData,
		callback: attemptLogin,
		isLoading,
		error,
	} = useFetch({
		endpoint: "/auth/token",
		fetchOnInit: false,
		method: "post",
	});
	const {
		register,
		handleSubmit,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = async formData => {
		await attemptLogin(formData);
	};

	useEffect(() => {
		if (error) {
			console.log(error?.code);
		} else if (apiData && !error) {
			reset();
			setUserData(apiData);
			setFormValidated(true);
		}
	}, [error, apiData]);

	return (
		<>
			{isLoading && <Loader />}
			<div
				className="h-screen bg-cover bg-center grid place-content-center background-overlay"
				style={{ backgroundImage: `url(${background})` }}
			>
				{formValidated && (
					<p className="text-[#eb4236] absolute -bottom-4 font-semibold text-center">
						{Object.values(errors)[0]?.message ||
							"Your username or password is invalid"}
					</p>
				)}
				<button
					type="button"
					className="absolute top-0 left-6 text-2xl"
					onClick={() => navigate(-1)}
				>
					&larr;
				</button>
				<div className="z-10 flex flex-col items-center relative pb-10">
					<h1 className="text-2xl mr-auto">Login</h1>
					{formValidated && (
						<p className="text-[#4bdb71] absolute -top-4 text-center text-shadow">
							You are now logged in!
						</p>
					)}
					<form
						className="flex flex-col items-center gap-5"
						onSubmit={handleSubmit(submitHandler)}
					>
						<input
							{...register("username")}
							type="text"
							aria-invalid={errors.username || error ? true : false}
							placeholder="brugernavn"
							className="h-12 px-4 bg-gray text-black"
						/>
						<input
							{...register("password")}
							type="password"
							aria-invalid={errors.password || error ? true : false}
							placeholder="adgangskode"
							className="h-12 px-4 bg-gray text-black"
						/>
						<GenericButton text="Login" type="submit" />
						{(Boolean(Object.keys(errors).length) || error) && (
							<p className="text-[#eb4236] absolute -bottom-4 text-center text-shadow">
								{Object.values(errors)[0]?.message ||
									"Your username or password is invalid"}
							</p>
						)}
					</form>
				</div>
			</div>
		</>
	);
};

export default Login;
