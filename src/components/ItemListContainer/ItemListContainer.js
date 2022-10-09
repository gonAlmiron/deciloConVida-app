import { useEffect, useState } from "react"
import { useParams, Navigate } from "react-router-dom"
import ItemList from "../ItemList/ItemList"
import Spinner from "../Spinner/Spinner"
import { useLoginContext } from "../../Context/LoginContext"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "../../firebase/config"
import FooterUno from "../Footer/Footer"
import CarouselUno from "../Carousel/Carousel"

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()


    useEffect(() => {
        setLoading(true)
        // 1- armar la referencia (sync) aca decimos a firebase q coleccion queremos consumir, de que base de datos, de que proyecto
            const productosRef = collection(db, 'Productos') 
            const q = categoryId 
            ? query(productosRef, where('category', '==', categoryId))
            : productosRef
        // 2- consumir esa referencia (async)

            getDocs(q)
                .then((resp) => {
                    const productosDB = resp.docs.map( (doc) => ({id: doc.id, ...doc.data()}) )
        
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
                       : <>
                       <CarouselUno/>
                       <ItemList productos={productos}/>
                        <FooterUno/>
                        </>
                   }
               </div>
               : <Navigate to="/login" />
            }
      
        </>
    )
}

export default ItemListContainer




