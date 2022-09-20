import Item from "../Item/Item"

const ItemList = ( {productos = []} ) => {
    return (     
    
    <div className="row">
    <h3 className="productos">Productos</h3>
    <hr/>
        { productos.map((prod) => (
        
            <div key={prod.id} className="col-4">
                <Item producto={prod} key={prod.id}/>
            </div> 
        ))
        }
</div>
)
}



export default ItemList

// import Item from "../Item/Item"


// const ItemList = ( {productos = []} ) => {

//     return (
//         <div className="container my-5">
//             <h2>Productos</h2>
//             <hr/>

//             { productos.map((prod) => <Item producto={prod} key={prod.id}/>)}
//         </div>
//     )
// }

// export default ItemList


