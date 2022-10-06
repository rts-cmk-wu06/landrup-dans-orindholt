const Loader = () => {
	return (
		<aside className="fixed top-0 left-0 bottom-0 right-0 grid place-content-center z-40 pointer-events-none">
			<div className="animate-bounce text-3xl">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					style={{ margin: "auto" }}
					width="100"
					height="100"
					display="block"
					preserveAspectRatio="xMidYMid"
					viewBox="0 0 100 100"
				>
					<circle
						cx="50"
						cy="50"
						r="0"
						fill="none"
						stroke="#5e2e53"
						strokeWidth="2"
					>
						<animate
							attributeName="r"
							begin="0s"
							calcMode="spline"
							dur="1s"
							keySplines="0 0.2 0.8 1"
							keyTimes="0;1"
							repeatCount="indefinite"
							values="0;40"
						></animate>
						<animate
							attributeName="opacity"
							begin="0s"
							calcMode="spline"
							dur="1s"
							keySplines="0.2 0 0.8 1"
							keyTimes="0;1"
							repeatCount="indefinite"
							values="1;0"
						></animate>
					</circle>
					<circle
						cx="50"
						cy="50"
						r="0"
						fill="none"
						stroke="#e1a1e9"
						strokeWidth="2"
					>
						<animate
							attributeName="r"
							begin="-0.5s"
							calcMode="spline"
							dur="1s"
							keySplines="0 0.2 0.8 1"
							keyTimes="0;1"
							repeatCount="indefinite"
							values="0;40"
						></animate>
						<animate
							attributeName="opacity"
							begin="-0.5s"
							calcMode="spline"
							dur="1s"
							keySplines="0.2 0 0.8 1"
							keyTimes="0;1"
							repeatCount="indefinite"
							values="1;0"
						></animate>
					</circle>
				</svg>
			</div>
		</aside>
	);
};

export default Loader;
