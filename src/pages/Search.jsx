import { useState } from "react";
import ActivityList from "../components/Activities/ActivityList";
import Loader from "../components/Loader";
import SearchField from "../components/Search/SearchField";
import useFetch from "../hooks/useFetch";
import Fuse from "fuse.js";

const Search = () => {
	const { data } = useFetch({
		endpoint: "/api/v1/activities",
	});
	const [searchValue, setSearchValue] = useState("");

	if (!data) return <Loader />;

	const fuse = new Fuse(data, {
		keys: ["name"],
	});

	const computedData = Boolean(fuse.search(searchValue).length)
		? fuse.search(searchValue).map(item => item.item)
		: data;

	return (
		<>
			<SearchField value={searchValue} setValue={setSearchValue} />
			<ActivityList data={computedData} />
		</>
	);
};

export default Search;
