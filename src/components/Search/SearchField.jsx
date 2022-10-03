const SearchField = ({ value, setValue }) => {
	return (
		<form className="bg-[#C4C4C4] bg-opacity-30 flex items-center h-12 my-2">
			<input
				className="bg-transparent w-full h-full px-2"
				type="text"
				name="search"
				id="search"
				value={value}
				onChange={e => setValue(e.target.value)}
			/>
			<button type="submit" className="px-4 h-full">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
						stroke="#EAEAEA"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
					<path
						d="M21 21L16.65 16.65"
						stroke="#EAEAEA"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					/>
				</svg>
			</button>
		</form>
	);
};

export default SearchField;
