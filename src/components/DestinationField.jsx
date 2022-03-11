function DestinationField({customDestination, setCustomDestination}) {
    return (
        <>
            <label htmlFor="destination">Choose another destination: </label>
            <input type="search" id="destination" value={customDestination} onFocus={() => document.getElementById("destination-dropdown").classList.toggle("invisible")} onBlur={() => document.getElementById("destination-dropdown").classList.toggle("invisible")} onChange={(e) => setCustomDestination(e.target.value)}/>
        </>
    );
}

export default DestinationField;