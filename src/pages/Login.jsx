import GenericButton from "../components/GenericButton";
import background from "../assets/splash-image.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { object, string, boolean } from "yup";
import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import Loader from "../components/Loader";
import { userContext } from "../util/UserContext";
import LoginInput from "../components/Login/LoginInput";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import BackButton from "../components/BackButton";

const validationSchema = object({
	username: string().required("You need to enter a username"),
	password: string().required("You need to enter a password"),
	rememberMe: boolean().optional(),
});

const Login = () => {
	const [cookies, setCookie, removeCookie] = useCookies(["user-data"]);
	const {
		userData: { set: setUserData },
	} = useContext(userContext);

	const {
		callFetch: attemptLogin,
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
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(validationSchema),
	});

	const submitHandler = async formData => {
		const { username, password, rememberMe } = formData;
		const loginResponse = await attemptLogin({ username, password });

		if (loginResponse?.error || !loginResponse?.data) return;

		document.activeElement.blur();
		// Cookies
		if (rememberMe) {
			setCookie("user-data", loginResponse.data, {
				path: "/",
				expires: new Date(loginResponse.data.validUntil),
				sameSite: "lax",
			});
		} else if (cookies["user-data"]) removeCookie("user-data");

		reset();
		setUserData(loginResponse.data);
		toast.success(`Velkommen tilbage ${formData.username}!`);
	};

	const isInvalid = error?.response?.status == 401;

	return (
		<>
			{isLoading && <Loader />}
			<div
				className="h-screen bg-cover bg-center grid place-content-center background-overlay"
				style={{ backgroundImage: `url(${background})` }}
			>
				<BackButton />
				<div className="z-10 flex flex-col items-center relative pb-10">
					<h1 className="text-2xl mr-auto">Login</h1>
					<form
						className="flex flex-col items-center gap-3"
						onSubmit={handleSubmit(submitHandler)}
					>
						<LoginInput
							register={{ ...register("username") }}
							error={errors.username || isInvalid ? true : false}
							type="text"
							placeholder="brugernavn"
							autoComplete="username"
						/>
						<LoginInput
							register={{ ...register("password") }}
							type="password"
							error={errors.password || isInvalid ? true : false}
							placeholder="adgangskode"
							autoComplete="current-password"
						/>
						<div className="flex gap-2 items-center w-full">
							<input
								{...register("rememberMe")}
								type="checkbox"
								id="remember-me"
							/>
							<label htmlFor="remember-me" className="leading-none select-none">
								Husk mig
							</label>
						</div>
						<GenericButton text="Login" type="submit" className="mt-4" />
						{(Boolean(Object.keys(errors).length) || isInvalid) && (
							<p className="text-error absolute -bottom-4 text-center bg-black px-1 py-1 bg-opacity-70 rounded-sm !leading-none">
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
