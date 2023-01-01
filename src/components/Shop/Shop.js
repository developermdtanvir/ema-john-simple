import { useEffect, useState } from "react";
import api from './../../api/api.json';
export const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        setProduct(api);
    }, [])
    console.log(product);
    return (
        <div>
            <div>

            </div>
        </div>
    )
}
