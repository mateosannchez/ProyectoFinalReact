import React, { useState } from "react";
import Section from "../Section/ItemListContainer";
import "../../App.css"


const Counter = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial);

    let minimo = 1

    const sumar = () => {

        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("Stock disponible")
        }
    }

    const restar = () => {
    
        if (count>minimo) {
            setCount(count - 1);
        } else {
            alert("Stock minimo")
        }
        
      
    }
    // disabled={count === 0}
    return (
        <div className="contador">
            {/* <div className="contador__1"> */}
                <button className="contador__suma" onClick={sumar}>+</button>
                <button className="contador__count">{count}</button>
                <button className="contador__resta" onClick={restar}>-</button>
            {/* </div> */}

            <button className="contador__carrito" onClick={onAdd} >Agregar al carrito</button>
            <p className="contador__stock">{stock} Productos disponibles</p>

        </div>
    )
}


export default Counter;