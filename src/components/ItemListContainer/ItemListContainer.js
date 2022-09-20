import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import { pedirDatos } from "../../helpers/pedirDatos"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useLoginContext } from "../../Context/LoginContext"



const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()
    // console.log(categoryId)

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then( (res) => {
            if(!categoryId) {

                setProductos(res)
            } else {
                setProductos(res.filter((prod)=> prod.category === categoryId) )
            }
               
            })
            .catch( (error) => {
                console.log(error)
            })
            .finally(() => {
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