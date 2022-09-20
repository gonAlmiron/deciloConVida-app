import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useLoginContext } from "../../Context/LoginContext"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../firebase/config"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    // console.log(categoryId)

    useEffect(() => {
        setLoading(true)
        // 1- armar la referencia (sync) aca decimos a firebase q coleccion queremos consumir, de que base de datos, de que proyecto
            const productosRef = collection(db, 'Productos') 
        
        // 2- consumir esa referencia (async)
            getDocs(productosRef)
                .then((resp) => {
                    const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
                    console.log(productosDB)
                    setProductos(productosDB)
                }).finally(() => {
                    setLoading(false)
                })
            
      
    }, [categoryId])

    const {user} = useLoginContext()


    return (
        <>
            {
                user.logged
                ?
                <div>
                {
                       loading 
                       ? <Spinner/>
                       : <ItemList productos={productos}/>
                   }
               </div>
               : <Navigate to="/login" />
            }
      
        </>
    )
}

export default ItemListContainer






// import { useState, useEffect } from "react"
// import {pedirDatos} from "../../helpers/pedirDatos"
// import ItemList from "../ItemList/ItemList"
// import { useParams } from "react-router-dom"
// import Spinner from "../Spinner/Spinner"




// const ItemListContainer = () => {
//     const [productos, setProductos] = useState([])
//     const [loading, setLoading] = useState(true)


//     const { categoryId } = useParams()

//     useEffect(()=> {
//         setLoading(true)

//         pedirDatos()
//         .then ((res) => {
//             if (!categoryId) {
//                 setProductos(res)
//             } else {
//                 setProductos( res.filter((prod) => prod.category === categoryId) )
//             }
        
//         })
//         .catch((error) => {
//             console.log(error)
//         }) .finally(() => {
//             setLoading(false)
//         })
        
//     }, [categoryId])



//     return (

      
//         <div>
//             {
//             loading ? 
//             <Spinner/>
//             : 
//                 <ItemList productos={productos}/>
//             }
//         </div>
//     )
// }

// export default ItemListContainer