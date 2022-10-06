const LoginInput = ({
	register,
	type = "text",
	placeholder,
	className,
	error,
	autoComplete = "none",
}) => {
	return (
		<input
			{...register}
			type={type}
			placeholder={placeholder}
			aria-invalid={error.toString()}
			className={`h-12 px-4 bg-gray text-black border-2 border-gray border-solid ${
				error ? "!border-error" : ""
			} ${className}`}
			autoComplete={autoComplete}
		/>
	);
};

export default LoginInput;
