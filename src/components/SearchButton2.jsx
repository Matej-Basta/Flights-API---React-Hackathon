function SearchButton2({
	fetchingCustomDestination,
	customDestination,
	setResults,
}) {
	const handleClick = () => {
		fetchingCustomDestination(customDestination);
		setResults(10);
	};

	return <button onClick={handleClick}>Search</button>;
}

export default SearchButton2;
