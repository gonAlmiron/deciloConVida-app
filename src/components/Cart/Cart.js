import { useCartContext } from "../../Context/CartContext"
import {BsFillTrashFill} from "react-icons/bs"
import { useDarkMode } from "../../Context/DarkModeContext"
import { Link } from "react-router-dom"

const Cart = () => {


    const {cart, cartTotal, emptyCart, removeItem} = useCartContext()
    const {darkMode} = useDarkMode()
    console.log(darkMode)

    if (cart.length === 0) {
        return (
            <div className="container my-2">
                <h2>Tu carrito esta vacío</h2>
                <hr/>
                <Link to="/" className="btn btn-primary">Ir a comprar</Link>
            </div>
        )
    }


    return (

    <div className="container my-2">

        <h2>Carrito</h2>
        <hr/>

        {cart.map((item) => (
            <div key={item.id}>
                <h5>{item.nombre}</h5>
                <p>Cantidad: {item.cantidad}</p>
                <p>Precio: ${item.precio}</p>
                <button onClick={() => removeItem(item.id)}><BsFillTrashFill/></button>
                <hr/>
            </div>
        ))}
            <h4>Total: ${cartTotal()}</h4>
            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito</button>
    </div>
        
    )
}

export default Cart