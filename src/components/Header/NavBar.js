import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
import { useLoginContext } from '../../Context/LoginContext';
import { useCartContext } from '../../Context/CartContext';


export const NavBar = () => {

  const {user, logout} = useLoginContext()
  const {cart} = useCartContext()

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Decilo con Vida</Navbar.Brand>
          <Nav className="me-auto">
            <Link to="/productos/:categoryId" className="nav">Productos</Link>
            <Link to="/Nosotros" className="nav">Nosotros</Link>
            <Link to="/Contacto" className="nav">Contacto</Link>
            
        
          </Nav>
        </Container>
        
        <div className='header-user'>
          <small>Bienvenido: {user.user}</small> 
          <button onClick={logout} className='btn btn-outline-danger'>Logout</button>
        </div>

    
    {cart.length > 0 ? <button><CartWidget/></button> : ''}
        
      </Navbar>
        
    </>
  )
}

