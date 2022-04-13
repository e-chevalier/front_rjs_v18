import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const Item = ({ prod }) => {

    return (
        <Col>
            <Card className="text-decoration-none text-body" as={Link} to={`/item/${prod.id}`}>
                <Card.Img variant="top" src={prod.thumbnails[1]} />
                <Card.Body>
                    <Card.Title as="h3">${prod.price}</Card.Title>
                    <Card.Text className="text-muted">
                        {prod.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item