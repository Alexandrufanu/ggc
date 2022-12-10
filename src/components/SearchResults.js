
import Gist from "./Gist"

const SearchResults = (props) => {

    console.log(props.results)
    const {results, username} = props.results

    console.log(results, username)

    return <>
    
    <div>
        {console.log("results called")}
    here is a list of results for user {username} :

    </div>

    {/* <ul> */}

    {results.map((result, idx) => {

         return (<Gist key={idx} data = {result} />)

        })   
    }
    {/* </ul> */}

    
    </>

}




export default SearchResults

