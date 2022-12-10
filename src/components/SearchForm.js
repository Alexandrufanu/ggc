import { useState, useEffect } from "react"

import SearchResults from "./SearchResults"


const SearchForm = (props) => {

    const [query, setQuery] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(query)

    }


    return <>

    <form
    onSubmit={handleSubmit}
    >
      <label>
        Search for a username:
        <input type="text" 
            onChange={(event) => {setQuery(event.target.value); }}
        />
      </label>
      <input type="submit" value="Search" />
      

    </form>

    </>

}



export default SearchForm