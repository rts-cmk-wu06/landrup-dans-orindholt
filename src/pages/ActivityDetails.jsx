import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import acitvityAge from "../util/activityAge";
import GenericButton from "../components/GenericButton";
import Loader from "../components/Loader";
import { useContext, useEffect, useState } from "react";
import { userContext } from "../util/UserContext";
import { toast } from "react-toastify";

const AcitivityDetail = () => {
	const [isLoading, setIsLoading] = useState(false);
	const { id: activityId } = useParams();
	const {
		userData: { get: contextUserData },
	} = useContext(userContext);
	const { data: activityData } = useFetch({
		endpoint: `/api/v1/activities/${activityId}`,
	});

	const { data: userData, callback: getUserData } = useFetch({
		endpoint: `/api/v1/users/${contextUserData?.userId}`,
		fetchOnInit: false,
		authToken: contextUserData?.token,
	});

	const { callback: addUserToActivity } = useFetch({
		endpoint: `/api/v1/users/${contextUserData?.userId}/activities/${activityId}`,
		method: "post",
		fetchOnInit: false,
		authToken: contextUserData?.token,
	});
	const { callback: removeUserFromActivity } = useFetch({
		endpoint: `/api/v1/users/${contextUserData?.userId}/activities/${activityId}`,
		method: "delete",
		fetchOnInit: false,
		authToken: contextUserData?.token,
	});

	const isLoggedIn = Boolean(contextUserData);

	const startLoading = () => setIsLoading(true);
	const endLoading = () => setIsLoading(false);

	useEffect(() => {
		const getUser = async () => {
			startLoading();
			await getUserData();
			endLoading();
		};
		if (isLoggedIn) getUser();
	}, []);

	if (!activityData) return <Loader />;

	const {
		asset: { url: assetUrl },
		assetId,
		minAge,
		maxAge,
		name,
		weekday,
		description,
	} = activityData;

	console.log(userData?.age, minAge);
	const isBelowAgeLimit = userData?.age < minAge;
	const isOverAgeLimit = userData?.age > maxAge;

	const isSignedUp = userData?.activities.some(
		a => a.id === parseInt(activityId)
	);

	const dateConflict = userData?.activities.some(a => a.weekday === weekday);

	console.log(userData);

	const addToActivity = async () => {
		if (isSignedUp) {
			toast.error("Du er allerede tilmeldt aktiviteten!", {
				toastId: "sign-up-error",
			});
			return;
		} else if (isOverAgeLimit || isBelowAgeLimit) {
			toast.error(
				`Du er ${
					isOverAgeLimit ? "for gammel" : "for ung"
				} til denne aktivitet!`,
				{
					toastId: "age-limit",
				}
			);
			return;
		} else if (dateConflict) {
			toast.error(`Du har allerede en aktivitet, ${weekday}!`, {
				toastId: "date-conflict",
			});
			return;
		}
		startLoading();
		await addUserToActivity();
		await getUserData();
		endLoading();
	};

	const removeFromActivity = async () => {
		if (!isSignedUp) {
			toast.error("Du har allerede forladt aktiviteten!", {
				toastId: "sign-up-error",
			});
			return;
		}
		startLoading();
		await removeUserFromActivity();
		await getUserData();
		endLoading();
	};

	return (
		<>
			{isLoading && <Loader />}
			<div className="relative grid h-[60vh] overflow-hidden">
				<img
					src={assetUrl}
					alt={assetId}
					className="w-full h-full object-cover object-center"
				/>
				<GenericButton
					className="absolute bottom-6 right-6 shadow-base"
					text={
						!isSignedUp && isLoggedIn
							? "Tilmeld"
							: isSignedUp
							? "Forlad"
							: "Log ind"
					}
					click={
						!isSignedUp && isLoggedIn
							? addToActivity
							: isSignedUp
							? removeFromActivity
							: false
					}
					anchor={!isLoggedIn && "/login"}
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
