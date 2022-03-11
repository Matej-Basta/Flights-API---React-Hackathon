function DestinationDropdown({destinations, destination, setDestination}) {
    return (
        <>
            <label htmlFor="destination">Destination: </label>
            <select name="destination" value={destination} onChange={(e) =>  setDestination(e.target.value)}>
                {destinations.map((city, index) => (
                    <option key={index} value={city.toLowerCase()}>{city}</option>
                ))}
            </select>
        </>
    );
}

export default DestinationDropdown;