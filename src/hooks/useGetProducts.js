import { useEffect, useState } from "react";
//import getProducts from '../services/GetProducts/getProducts'
import getFetch from "../services/GetProducts/getFetch";

const useGetProducts = (id = 0) => {

    console.log("id "+ id)
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch(id)
            .then(res => {
                setProducts(res)
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
                console.log('GetProducts Finalizada');
            });

        return () => {
            setLoading(true)
        }
    }, [id])

    return [products, loading]
}

export default useGetProducts