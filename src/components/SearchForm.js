
import SearchResults from "./SearchResults"


const SearchForm = (props) => {



    const handleSubmit = () => {}

    return <>
    
    <form onSubmit={handleSubmit}>
      <label>
        Search for a username:
        <input type="text" />
      </label>
      <input type="submit" value="Search" />
      
      {/* <SearchResults results={searchResults} username={username}/> */}

    </form>

    </>

}



export default SearchForm