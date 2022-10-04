import { useState } from "react";
import ActivityList from "../components/Activities/ActivityList";
import Loader from "../components/Loader";
import SearchField from "../components/Search/SearchField";
import useFetch from "../hooks/useFetch";
import Fuse from "fuse.js";
import Section from "../components/Section";
import MainHeading from "../components/MainHeading";

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
			<Section>
				<MainHeading />
				<div className="mb-6">
					<SearchField value={searchValue} setValue={setSearchValue} />
				</div>
				<ActivityList data={computedData} />
			</Section>
		</>
	);
};

export default Search;
