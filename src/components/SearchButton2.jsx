function SearchButton2({fetchingCustomDestination}) {
    return <button onClick={() => fetchingCustomDestination("lisbon")}>Search</button>;
}

export default SearchButton2;