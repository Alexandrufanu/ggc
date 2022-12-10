import { useState, useEffect } from "react"
import "../styles/SearchForm.css"

const SearchForm = (props) => {

    const [query, setQuery] = useState("")

    const handleSubmit = (event) => {
        console.log("sumit clicked")
        event.preventDefault();
        props.onSearch(query)
    }


    return <>
        <div className="form-format">
            <form onSubmit={handleSubmit} className="">
                <div>
                Get any Gist by entering the GitHub username:
                </div>
                <input type="text" className="text-input"
                    onChange={(event) => {setQuery(event.target.value); }}
                />
                <input type="submit" className="submit-input" value="Search!"/>
            </form>

        </div>  
    </>

}



export default SearchForm