import React from 'react'
import ItemList from '../ItemList/ItemList'
import Container from 'react-bootstrap/Container'
import useGetProducts from '../../../hooks/useGetProducts'
import Loading from '../../LoadingComponent/Loading'
import { useSearchParams } from 'react-router-dom'

const ItemListContainer = () => {

    let [searchParams, setSearchParams] = useSearchParams();

    console.log(searchParams)

    const [products, loading] = useGetProducts()

    return (
        loading ?
            <Loading />
            :
            <Container id="cards" className="py-5 my-5">
                <ItemList products={products}/>
            </Container>
    )
}

export default ItemListContainer