function SearchButton2({fetchingCustomDestination, customDestination}) {
    return <button onClick={() => fetchingCustomDestination(customDestination)}>Search</button>;
}

export default SearchButton2;