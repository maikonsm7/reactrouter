import { useSearchParams, Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
const Search = () => {
    const [searchParams] = useSearchParams()
    const url = 'http://localhost:3000/products?' + searchParams
    const {data: items, loading, error} = useFetch(url)
    return(
        <div>
            <h4>Busca</h4>
            {items && items.map(product => (
                <li key={product.id}>
                    {product.name} - R$ {product.price}
                    <Link to={`/product/${product.id}`}>Detalhes</Link>
                    </li>
            ))}
        </div>
    )
}

export default Search