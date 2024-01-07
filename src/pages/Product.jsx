import { useParams } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Product = () => {
    const { id } = useParams()
    const url = `http://localhost:3000/products/${id}`
    const { data: product, loading, error } = useFetch(url) 
    return (
        <div>
            <h4>Produto selecionado:</h4>
            {error && <p>Ocorreu um erro...</p>}
            {loading && <p>Carregando...</p>}
            {product && 
            <div>
            <p>Id: {product.id}</p>    
            <p>Nome: {product.name}</p>    
            <p>Preco: {product.price}</p>    
            </div>}
        </div>
    )
}
export default Product