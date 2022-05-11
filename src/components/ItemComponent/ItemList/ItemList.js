import Item from '../Item/Item'
import Row from 'react-bootstrap/Row'

const ItemList = ({ products }) => {

  console.log("Productos length: " + products.length)

  return (
    products.length > 0?
    <>     
      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {
          products.map(prod =>
              <Item key={prod.id} prod={prod} />
          )
        }
      </Row>
    </>:
    <p className="fs-3">Sin resultados.</p>

  )
}

export default ItemList