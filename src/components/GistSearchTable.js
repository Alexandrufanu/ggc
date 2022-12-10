import { useState } from "react"

import SearchForm from "./SearchForm"
import SearchResults from "./SearchResults"

import { Octokit } from "octokit";



const GistSearchTable = (props) => {

    const [searchResults, setSearchResults] = useState({username:"", results:[]})

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GITHUB_AUTH
      })
      


    async function handleSearch(query) {
        console.log("Getting ", query)
        
        query = query.trim()

        try {
            const response = await octokit.request('GET /users/adilanchian/gists', {})
            
            console.log("Data from request:", response)

            console.log("Data from request:", response.data)

            setSearchResults(
                {
                    username:"marcorichetta",
                    results:response.data,
                }
            )

            console.log(searchResults)

        } catch (e) {
            alert(`An error (${e}) has occured, please try another name`)
        } 



      }

    return <>
    
    <SearchForm onSearch={handleSearch}  />

    {/* this is just to validate that the state is corectly changed*/}
    {/* {searchQuery===""? "":"Github Account with username " +searchQuery + "has the following repos:"} */}

    <SearchResults results={searchResults}/>

    
    </>

}






export default GistSearchTable

