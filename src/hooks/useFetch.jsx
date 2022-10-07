import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const apiUrl = "http://localhost:4000";

const useFetch = ({
	endpoint = "/api/v1/",
	method = "GET",
	authToken = "",
	fetchOnInit = true,
}) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	const callFetch = async (body = {}) => {
		setIsLoading(true);
		return axios({
			url: `${apiUrl}${endpoint}`,
			method,
			data: body,
			headers: {
				Authorization: `Bearer ${authToken}`,
			},
		})
			.then(res => {
				setData(res.data);
				setError(null);
				setIsLoading(false);
				return { ...res, error: false };
			})
			.catch(err => {
				setData(null);
				setError(err);
				setIsLoading(false);
				return { ...err, error: true };
			});
	};

	useEffect(() => {
		if (fetchOnInit && !error) {
			callFetch();
		}
	}, [endpoint, method]);

	return { data, error, isLoading, callFetch };
};

export default useFetch;
