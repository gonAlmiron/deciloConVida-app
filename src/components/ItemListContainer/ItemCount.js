
const ItemCount = ({max, counter, setCounter, handleAgregar}) => {




    const handleRestar = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    const handleSumar = () => {
        if (counter < max ) {
            setCounter(counter + 1)
        }
    }

return (
    <div className="container my-5">
       
        <button 
            onClick={handleRestar} 
            className={counter ===1 ? "btn btn-outline-danger" : "btn btn-outline-primary"}
            >
                -
            </button>
        <span className="mx-2">{counter}</span>
        <button 
            onClick={handleSumar} 
            disabled= {counter === max}
            className={counter === max ? "btn btn-outline-danger" : "btn btn-primary"}>
                 +
        </button>
        <br/>
        <br/>

    <br/>
    <button 
    disabled={counter === 0}
    onClick={handleAgregar} className="btn btn-success my-2">
                Agregar al carrito
            </button>
    </div>



)   


}

export default ItemCount