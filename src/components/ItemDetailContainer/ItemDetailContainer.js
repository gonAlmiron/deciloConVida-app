import {useEffect, useState} from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import Spinner from "../Spinner/Spinner"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase/config"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [loading, setLoading] = useState(true)

    const {itemId} = useParams()

    // console.log(itemId)

    useEffect(() => {

        setLoading()
        
        // 1- armar la referencia ( sincornico)
        const docRef = doc(db, 'Productos', itemId)
        // 2- llamar a la base de datos (asincronica)
        getDoc(docRef)
            .then( (doc) => {
                setItem({id: doc.id, ...doc.data()})
           
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return (

        <div>
            {    loading 
                ? <Spinner/> :
            <ItemDetail item={item} key={itemId}/>
            
}
        </div>
    )
}

export default ItemDetailContainer

