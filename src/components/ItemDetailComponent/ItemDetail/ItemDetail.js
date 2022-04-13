
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'

const ItemDetail = ({ product }) => {

    return (
        <>
            <Row className="g-4">
                <Card border="light" className="my-5">
                    <Row className="g-0">
                        <Col md={6} lg={{ span: 5 }}>
                            <Carousel variant="dark">
                                {
                                    Object.entries(product.thumbnails).map((key, i ) => 
                                        <Carousel.Item key={i}>
                                            <img
                                                className="d-block w-100"
                                                src={key.at(1)}
                                                alt="First slide"
                                            />
                                        </Carousel.Item>
                                    )
                               
                                }
                            </Carousel>
                        </Col>
                        <Col md={6} lg={{ span: 6 }} className="d-flex align-items-center text-start">
                            <Card.Body>
                                <Card.Title className="fs-2">{product.title}</Card.Title>
                                <Card.Text className="fs-2">${product.price}</Card.Text>
                                <Card.Text className="my-5 text-start">{product.description}</Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Row>
            <Row xs={1} sm={1} md={3} lg={4} className="g-4">
                {
                    Object.entries(product.features).map((feature, i) =>
                        <Col>
                            <Card border="light" key={i} className="shadow p-0">
                                <Card.Header className="p-0">{feature.at(0)}</Card.Header>
                                <Card.Body className="text-start ">
                                    {
                                        Object.entries(feature.at(1)).map((key, i) =>
                                            <Card.Text key={i} className="p-0">
                                                {key.at(0)}: {typeof key.at(1) == 'boolean' ? key.at(1) ? 'Si' : 'No' : key.at(1)}
                                            </Card.Text>
                                        )
                                    }
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </>


    )
}

export default ItemDetail