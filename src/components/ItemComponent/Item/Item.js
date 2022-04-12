import Card from "react-bootstrap/Card"
import Col from 'react-bootstrap/Col'
import { Link } from 'react-router-dom'


const Item = ({ prod }) => {

    return (
        <Col>
            <Card as={Link} to={`/item/${prod.id}`}>
                <Card.Img variant="top" src={prod.thumbnail} />
                <Card.Body>
                    <Card.Title>{prod.title}</Card.Title>
                    <Card.Text>
                        {prod.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Item