const SearchField = ({searchInput, setSearchInput}) => {
    return (
        <>
         <input type="text"
             className="searchField"
             placeholder="Name or breed"
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)} />

        
        </>
    )
}
export default SearchField