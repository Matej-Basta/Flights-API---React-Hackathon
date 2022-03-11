import { useEffect, useState } from "react";
//custom components
import DestinationDropdown from "./DestinationDropdown";
import DepartureDropdown from "./DepartureDropdown";
import SearchButton from "./SearchButton";

function SearchFlights({
	fetchFlights,
	destination,
	setDestination,
	departure,
	setDeparture,
	setResults,
}) {
	//states
	// const [destination, setDestination] = useState("VLC");
	// const [departure, setDeparture] = useState("PRG");
	const [search, setSearch] = useState([departure, destination]);

	//useful constants
	const destinations = [
		{ name: "Valencia", iata: "VLC" },
		{ name: "Barcelona", iata: "BCN" },
		{ name: "Madrid", iata: "MAD" },
		{ name: "Milan", iata: "MIL" },
		{ name: "Athens", iata: "ATH" },
	];
	const placeOfDeparture = [
		{ name: "Prague", iata: "PRG" },
		{ name: "Berlin", iata: "BER" },
		{ name: "Warsaw", iata: "WAW" },
		{ name: "Pardubice", iata: "PED" },
	];

	//saving destination and place of departure into a search variable
	const handleClick = () => {
		setSearch([departure, destination]);
		setResults(10);
	};

	useEffect(() => {
		fetchFlights(search[0], search[1]);
	}, [search]);

	return (
		<>
			<DepartureDropdown
				placeOfDeparture={placeOfDeparture}
				departure={departure}
				setDeparture={setDeparture}
			/>
			<DestinationDropdown
				destinations={destinations}
				destination={destination}
				setDestination={setDestination}
			/>
			<SearchButton handleClick={handleClick} />
		</>
	);
}

export default SearchFlights;
