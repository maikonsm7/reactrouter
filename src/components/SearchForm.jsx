import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate('/search?q=' + query)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
                <input type="submit" value="buscar"/>
            </form>
        </div>
    )
}

export default SearchForm