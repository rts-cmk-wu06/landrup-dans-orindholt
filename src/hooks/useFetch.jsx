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

	const callback = async (body = {}) => {
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
			})
			.catch(err => {
				setData(null);
				setError(err);
				setIsLoading(false);
			});
	};

	useEffect(() => {
		if (fetchOnInit && !error) {
			callback();
		}
	}, [endpoint, method]);

	return { data, error, isLoading, callback };
};

export default useFetch;
