import { useState } from "react"

import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"

import { Octokit } from "octokit";

import "../styles/GistSearchTable.css"


const GistSearchTable = (props) => {

    const [searchResults, setSearchResults] = useState({username:"", results:[]})

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_AUTH
      })

    async function handleSearch(query) {
        
        query = query.trim()

        try {
            const response = await octokit.request(`GET /users/${query}/gists`, {})

            setSearchResults(
                {
                    username:"marcorichetta",
                    results:response.data,
                }
            )

        } catch (e) {
            alert(`An error (${e}) has occured, please try another name`)
        } 

      }

    return <>
    <div className="search-table">
        <SearchForm onSearch={handleSearch}  />

        <SearchResults results={searchResults}/>
    </div>
    </>

}

export default GistSearchTable

