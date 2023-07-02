import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
const Item = ({id, nombre, precio, img}) => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <Card.Text>{id}</Card.Text>
            <Link to={`/item/${id}`}>Ver Detalles </Link>
          </Card.Body>
        </Card>
    )
  }


export default Item