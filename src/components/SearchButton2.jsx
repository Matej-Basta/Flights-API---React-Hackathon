<<<<<<< HEAD
function SearchButton2({fetchingCustomDestination, customDestination}) {
    return <button onClick={() => fetchingCustomDestination(customDestination)}>Search different location</button>;
=======
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
>>>>>>> feature/pagination
}

export default SearchButton2;
