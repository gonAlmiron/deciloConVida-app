import { useState } from "react"




const CheckOut = () => {

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
            comprador: {
                nombre: values.nombre,
                email: values.email,
                direccion: values.direccion
            }
        }

            console.log("Submit realizado")
            console.log(orden)

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