import { useEffect, useState } from "react";
//custom components
import DestinationDropdown from "./DestinationDropdown";
import DepartureDropdown from "./DepartureDropdown";
import SearchButton from "./SearchButton";
import Checkboxes from "./Checkboxes";

function SearchFlights() {

    //states
    const [destination, setDestination] = useState("Valencia");
	const [departure, setDeparture] = useState("Prague");

    //useful constants
    const destinations = ["Valencia", "Barcelona", "Madrid", "Milano", "Athens"];
	const placeOfDeparture = ["Prague", "Berlin", "Warsaw", "Pardubice"];

    return (
        <>
            <DepartureDropdown placeOfDeparture={placeOfDeparture} departure={departure} setDeparture={setDeparture} /> 
            <DestinationDropdown destinations={destinations} destination={destination} setDestination={setDestination} />
            <Checkboxes />
            <SearchButton />
        </>
    );
}

export default SearchFlights;