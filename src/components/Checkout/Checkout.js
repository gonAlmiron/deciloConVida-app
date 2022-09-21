import { useState } from "react"
import {addDoc, collection} from 'firebase/firestore'
import { useCartContext } from "../../Context/CartContext"
import { db } from "../../firebase/config"




const CheckOut = () => {

    const {cart, cartTotal, terminarCompra} = useCartContext()

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

            console.log("Submit realizado")
            console.log(orden)

            const ordenesRef = collection(db, 'ordenes')

            addDoc(ordenesRef, orden)
                .then((doc) => {
                    console.log(doc.id)
                    terminarCompra(doc.id)
                })

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