import { useState } from "react"
import {addDoc, collection, doc, getDoc, updateDoc} from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config"
import { Navigate } from "react-router-dom"




const CheckOut = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext();

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    

    const handleSubmit = (e) => {   
        e.preventDefault()
        
        const orden = {
                nombre: values,
                items: cart,
                total: cartTotal()     
                 }

        const ordenesRef = collection(db, 'ordenes')

        cart.forEach((item) => {
            const docRef = doc(db, 'Productos', item.id)

            getDoc(docRef)
                .then((doc) => {

                    if (doc.data().stock >= item.cantidad) {

                        updateDoc(docRef, {
                            stock: doc.data().stock - item.cantidad
                        })
                    } else {
                        console.log("no hay stock suficiente")
                    }

                })

            })


         addDoc(ordenesRef, orden)
                .then((doc) => {
                    console.log(doc.id)
                
                    setOrderId(doc.id)
                    terminarCompra()
                })

    }

  
if (orderId) {
    return (
        <div className="container my-5">
            <h2>Compra exitosa!</h2>
            <hr/>
            <p>Tu número de orden es: <strong>{orderId}</strong> </p>
        </div>
    )
}

if (cart.length === 0) {
    return <Navigate to="/"/>
}
    if (orderId) {
        return (
            <div className="container my-5">

                <h2>
                    <hr/>
                    <p>
                        Tu número de orden es: <strong>{orderId}</strong>
                    </p>
                </h2>

            </div>
        )
    }




    return (
<div className="container my-5">
        <h4>Check Out</h4>
        <hr/>

    <form onSubmit={handleSubmit} >
            <input 
            name="nombre"
            onChange={handleInputChange}
            type={'text'} 
            className="my-3 form-control" 
            placeholder="Ingrese su nombre completo"
            
            />
            <input 
            name="email"
            onChange={handleInputChange}
            type={'email'} 
            className="my-3 form-control" 
            placeholder="Ingrese su email
            "/>

            <input 
            name="direccion"
            onChange={handleInputChange}
            type={'text'}
            className="my-3 form-control"  
            placeholder="Ingrese su dirección"
            />

            <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
</div>
    )
}

export default CheckOut