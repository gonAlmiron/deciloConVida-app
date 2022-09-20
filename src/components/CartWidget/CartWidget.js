import { BsFillCartCheckFill } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../Context/CartContext"


const CartWidget = () => {

        const {cartQuantity} = useContext(CartContext)

return (
    <Link to="/Cart" className={``}>
        <BsFillCartCheckFill/>
        <span>{cartQuantity()}</span>

    </Link>
)

}

export default CartWidget