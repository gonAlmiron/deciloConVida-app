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
   


    useEffect(() => {
        setLoading()
        
        const docRef = doc(db, 'Productos', itemId)
        
        getDoc(docRef)
            .then( (doc) => {
                setItem({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })
    // eslint-disable-next-line react-hooks/exhaustive-deps       
    },  [])

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

