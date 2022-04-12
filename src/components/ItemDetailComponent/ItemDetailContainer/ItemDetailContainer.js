import ItemDetail from '../ItemDetail/ItemDetail';
import Loading from '../../LoadingComponent/Loading';
import useGetProducts from '../../../hooks/useGetProducts';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';


const ItemDetailContainer = () => {

    const { id } = useParams();
    const [products, loading] = useGetProducts(0, id);

    return (
        loading ?
            <Loading />
            :
            <Container>
                { 
                    products[0].title ?
                        <ItemDetail product={products[0]} />
                    :
                        <div className="h4 my-5 px-5 text-center">NO SE ENCUENTRA EL PRODUCTO.</div>
                }
            </Container>
    )
}

export default ItemDetailContainer