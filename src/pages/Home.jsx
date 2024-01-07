import { useState, useEffect } from "react"
import { useFetch } from '../hooks/useFetch'
import { Link } from "react-router-dom"

const Home = () => {
    const url = 'http://localhost:3000/products'
    const { data } = useFetch(url)
    return(
        <div>
            <h2>Home</h2>
            <h4>Lista de produtos:</h4>
            <ul>
            {data && data.map(product => (
                <li key={product.id}>
                    {product.name} - R$ {product.price}
                    <Link to={`/product/${product.id}`}>Detalhes</Link>
                    </li>
            ))}
            </ul>
        </div>
    )
}

export default Home