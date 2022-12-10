
const SearchResults = (props) => {

    const {results} = props
    // const {username} = props

    return <>
    
    <div>
    {/* here is a list of results for user {username} : */}

    </div>

    <ul>
    {results.map((result, idx) => {
         return (<li key={idx}>{result.description}</li>)
       })
       
    }
    </ul>

    
    </>

}




export default SearchResults

