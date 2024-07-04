const Search = () => {
    return (
        <header>
            <h2 className="header__title">Search it. Find it. Buy it.</h2>
            <input
                type="text"
                className="header__search"
                placeholder="Enter an address, city, or ZIP code"
            />
        </header>
    );
}

export default Search;