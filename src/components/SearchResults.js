
import Gist from "./Gist"
import "../styles/SearchResults.css"

const SearchResults = (props) => {

    const {results, username} = props.results

    return <>
    
    {
    
    results.length > 0 ?results.map((result, idx) => {

         return (<Gist key={idx+result.description} data = {result} />)

        }):<div style={{textAlign:"center"}}><br/><br/>Here will be displayed a list of results!</div>

    }
    
    <div className="screen-filler">

    </div>

    </>

}


export default SearchResults

