import React, { useState } from "react";
import "../../App.css"

const Counter = () => {

    const [count, setCount] = useState(1);

    let stock = 5

    const sumar = () => {

        if (count < stock) {
            setCount(count + 1);
        } else {
            alert("Stock disponible")
        }
    }

    const restar = () => {
        setCount(count - 1)

    }

    return (
        <div className="contador">
            {/* <div className="contador__1"> */}
                <button className="contador__suma" onClick={sumar}>+</button>
                <button className="contador__count">{count}</button>
                <button className="contador__resta" onClick={restar}>-</button>
            {/* </div> */}

            <button className="contador__carrito" disabled={count === 0}>Agregar al carrito</button>
            <p className="contador__stock">{stock} Productos disponibles</p>

        </div>
    )
}


export default Counter;