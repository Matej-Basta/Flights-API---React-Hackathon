function SearchButton2({fetchingCustomDestination, customDestination}) {
    return <button onClick={() => fetchingCustomDestination(customDestination)}>Search different location</button>;
}

export default SearchButton2;