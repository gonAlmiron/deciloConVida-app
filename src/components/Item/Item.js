import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';



const Item = ( {producto} ) => {


    return (
        <Card key={producto.id} className="container mb-5" style={{width: '25rem'}}>
            <Card.Img src={producto.img}/>
             <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
                <p>Precio: ${producto.precio}</p>
                <small>Stock disponible: {producto.stock}</small>
                <Card.Text>{producto.descripcion}</Card.Text>
                {
                    producto.stock > 0 
                    ?  <Link to={`/item/${producto.id}`} className="btn btn-primary my-2">Comprar</Link>
                    : <Card.Text className="btn btn-outline-danger">No hay stock de este producto</Card.Text>
                }
               

             </Card.Body>
        </Card>
    )
}

export default Item