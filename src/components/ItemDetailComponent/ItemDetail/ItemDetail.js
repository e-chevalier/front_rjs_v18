
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
                        <Card.Text>Precio <span className="fw-bold fs-4">${product.price}</span></Card.Text>
                        <Card.Text className="my-5 text-start">{product.description}</Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={3} lg={5} className="g-4">
                    {
                        Object.entries(product.features).map((feature, i) =>
                            <div className="text-start ms-5" key={i}>
                                <p className="fs-4">{feature.at(0)}</p>
                                {
                                    Object.entries(feature.at(1)).map((key, i) =>
                                        <p key={i}>{key.at(0)}: {typeof key.at(1) == 'boolean' ? key.at(1) ? 'Si' : 'No' : key.at(1)}</p>
                                    )
                                }
                            </div>
                        )
                    }
            </Row>
        </Card>

    )
}

export default ItemDetail