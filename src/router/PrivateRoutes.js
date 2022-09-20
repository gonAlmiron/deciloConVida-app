import { Routes, Route, Navigate } from "react-router-dom"
import ItemListContainer from '../components/ItemListContainer/ItemListContainer.js';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Contacto from '../components/Contacto/Contacto';
import Nosotros from '../components/Nosotros/Nosotros';
import Cart from '../components/Cart/Cart';
import { NavBar } from "../components/Header/NavBar.js";


const PrivateRoutes = () => {
    return (

        <>
        <NavBar/>
      
          <Routes>
                <Route path='/' element={ <ItemListContainer/> }/>
                <Route path='/Productos' element={<ItemListContainer/>} />
                <Route path='/item/:itemId' element={<ItemDetailContainer/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
                <Route path='/Nosotros' element={<Nosotros/>}/>
                <Route path='/Cart' element= {<Cart/>} />
                <Route path="*" element={<Navigate to="/"/>} />

               
              </Routes>

              
        </>




    )
}

export default PrivateRoutes