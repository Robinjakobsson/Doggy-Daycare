const SearchField = ({searchInput, setSearchInput}) => {
    return (
        <>
         <input type="text"
             placeholder="Search for dog"
             value={searchInput}
             onChange={(e) => setSearchInput(e.target.value)} />

        
        </>
    )
}
export default SearchField