import { useEffect, useState } from "react";
//custom components
import DestinationDropdown from "./DestinationDropdown";
import DepartureDropdown from "./DepartureDropdown";
import SearchButton from "./SearchButton";
import SearchButton2 from "./SearchButton2";
import DestinationField from "./DestinationField";
import Checkbox from "./Checkbox";

function SearchFlights({fetchFlights, direct, setDirect}) {

    //states
    const [destination, setDestination] = useState("VLC");
	const [departure, setDeparture] = useState("PRG");
    const [customDestination, setCustomDestination] = useState("");
    const [search, setSearch] = useState([departure, destination]);

    //useful constants
    const destinations = [{name : "Valencia", iata : "VLC"}, {name : "Barcelona", iata : "BCN"}, {name : "Madrid", iata : "MAD"}, {name : "Milan", iata : "MIL"}, {name : "Athens", iata : "ATH"}];
	const placeOfDeparture = [{name : "Prague", iata : "PRG"}, {name : "Berlin", iata : "BER"}, , {name : "Warsaw", iata : "WAW"}, {name : "Pardubice", iata : "PED"}];

    //fetching the custom destination
    const fetchingCustomDestination = async (city) => {
        const response = await fetch(`https://api.skypicker.com/locations?term=${city}&location_types=airport`);
        const data = await response.json();

        console.log(data.locations[0].code);

        data && setSearch([departure, data.locations[0].code]);
    }

    //saving destination and place of departure into a search variable
    const handleClick = () => {
        setSearch([departure, destination]);        
    }

    useEffect(() => {
        fetchFlights(search[0], search[1]);
    }, [search]);

    return (
        <>
            <DepartureDropdown placeOfDeparture={placeOfDeparture} departure={departure} setDeparture={setDeparture} /> 
            <DestinationDropdown destinations={destinations} destination={destination} setDestination={setDestination} />
            <Checkbox setDirect={setDirect} direct={direct} />
            <SearchButton handleClick={handleClick}/>
            <DestinationField customDestination={customDestination} setCustomDestination={setCustomDestination}/>
            <SearchButton2 fetchingCustomDestination={fetchingCustomDestination} customDestination={customDestination}/>
        </>
    );
}

export default SearchFlights;