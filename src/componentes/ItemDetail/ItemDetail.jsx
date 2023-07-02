
import Card from 'react-bootstrap/Card';

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={img} />
          <Card.Body>
            <Card.Title>{nombre}</Card.Title>
            <Card.Text>{precio}</Card.Text>
            <Card.Text>{id}</Card.Text>
            <Card.Text> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, dolores voluptatum? Repellendus culpa fugiat officia suscipit magnam atque, labore inventore deserunt adipisci sit earum, porro, ullam quos nostrum non aperiam! </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}

export default ItemDetail