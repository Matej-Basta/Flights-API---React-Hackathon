function DestinationField({customDestination, setCustomDestination}) {
    return (
        <>
            <label htmlFor="destination">Choose another destination: </label>
            <input type="search" id="destination" value={customDestination} onChange={(e) => setCustomDestination(e.target.value)}/>
        </>
    );
}

export default DestinationField;