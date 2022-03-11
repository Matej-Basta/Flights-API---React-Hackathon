function DepartureDropdown({placeOfDeparture, departure, setDeparture}) {
    return (
        <>
            <label htmlFor="departure">Place of departure: </label>
            <select name="departure" value={departure} onChange={(e) =>  setDeparture(e.target.value)}>
                {placeOfDeparture.map((city, index) => (
                    <option key={index} value={city.iata}>{city.name}</option>
                ))}
            </select>
        </>
    );
}

export default DepartureDropdown;