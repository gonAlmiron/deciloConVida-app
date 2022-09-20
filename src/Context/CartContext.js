import { createContext, useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext()

export const useCartContext = () => {
    return useContext(CartContext)
}

const init = JSON.parse(localStorage.getItem('carrito')) || []


export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
  
const addToCart = (item) => {
  setCart([...cart, item])

}


const isInCart = (id) => {
  return cart.some((item) => item.id === id)
}

const cartQuantity = () => {
  return cart.reduce((acc, item) => acc + item.cantidad, 0)
}

const cartTotal = () => {
    return cart.reduce((acc, item) => acc + item.cantidad * item.precio, 0 )
}

const emptyCart = () => {
    Swal.fire({
        title: 'Desea borrar el carrito?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar carrito'
      }).then((result) => {
        if (result.isConfirmed) {
          
            setCart([])
          
        }
      })
  
}

const removeItem = (id) => {
    setCart (cart.filter((item) => item.id !== id) )
}

useEffect(() => {
  localStorage.setItem('carrito', JSON.stringify(cart))
}, [cart])

    return (
             <CartContext.Provider value={ {
            cart,
            addToCart,
            isInCart,
            cartQuantity,
            cartTotal,
            emptyCart,
            removeItem
          } }>
            {children}
            </CartContext.Provider>
    
          
    
    )
}