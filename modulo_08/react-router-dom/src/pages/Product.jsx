import {Link, useParams} from 'react-router-dom';
import { useFetch} from "../hooks/useFetch.jsx";


const Product = () => {

    const { id } = useParams();

    // 5 - carrega,emtp dado individual
    const url = "http://localhost:3000/products/" + id;

    const {data: product, loading, error} = useFetch(url);

    console.log(product);

    return (
        <>
        <div>
            <p>ID do produto: {id}</p>
            {error && <p>{error}</p>}
            {loading && <p>Loading...</p>}
            {product && (
                <div>
                    <h3>{product.name}</h3>
                    <p>{product.price}</p>
                {/*    6- nested routes*/}
                    <Link to={`/products/${product.id}/info`}>Mais informações</Link>
                </div>
            )}
        </div>
        </>
    )
}
export default Product
