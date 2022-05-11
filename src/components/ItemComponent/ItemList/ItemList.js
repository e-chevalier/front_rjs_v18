import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'

const ItemList = ({ products }) => {
  return (
    <>
      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {
          products.map(prod =>
              <Item key={prod.id} prod={prod} />
          )
        }
      </Row>

    </>
  )
}

export default ItemList