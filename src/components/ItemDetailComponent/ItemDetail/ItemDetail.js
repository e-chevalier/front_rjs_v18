
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'

const ItemDetail = ({ product }) => {

    return (
        <Card className="my-5">
            <Row className="g-0">
                <Col md={4} lg={{ span: 3, offset: 1 }}>
                    <img id="img" className="card-img-top" src={product.thumbnail} alt={product.title} />
                </Col>
                <Col md={8} lg={{ span: 4 }}>
                    <Card.Body className="text-center">
                        <Card.Title className="fs-2">{product.title}</Card.Title>
                        <Card.Text>Precio por Kg  <span className="fw-bold fs-4">${product.price}</span></Card.Text>
                        <Card.Text className="my-5 text-start">{product.description}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>

    )
}

export default ItemDetail