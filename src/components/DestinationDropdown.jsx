function DestinationDropdown({destinations, destination, setDestination}) {
    return (
        <div id="destination-dropdown">
            <label htmlFor="destination">Destination: </label>
            <select name="destination" value={destination} onChange={(e) =>  setDestination(e.target.value)}>
                {destinations.map((city, index) => (
                    <option key={index} value={city.iata}>{city.name}</option>
                ))}
            </select>
        </div>
    );
}

export default DestinationDropdown;