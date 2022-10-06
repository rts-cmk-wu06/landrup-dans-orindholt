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

	const searchData = fuse.search(searchValue).map(item => item.item);

	return (
		<>
			<Section>
				<MainHeading />
				<SearchField value={searchValue} setValue={setSearchValue} />
				<div className="mt-5">
					{(searchValue && searchData.length) || !searchValue ? (
						<ActivityList
							data={Boolean(searchData.length) ? searchData : data}
						/>
					) : (
						<p className="text-center">
							Der blev ikke fundet nogle aktiviteter.
							<br /> Prøv at søge efter noget andet.
						</p>
					)}
				</div>
			</Section>
		</>
	);
};

export default Search;
