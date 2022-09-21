import React, { useState } from "react";
import Section from "../ItemListContainer/ItemListContainer";
import ItemDetail from "../ItemDetail/ItemDetail";
import "../../App.css"


const CantCart = ({stock, initial, onAdd}) => {

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

    const addProduct = () => {
        onAdd(count);
        setCount(initial);
      };
    
    return (
        <div className="">
            {/* <div className="contador__1">
                <button className="contador__suma" onClick={sumar}>+</button>
                <button className="contador__count">{count}</button>
                <button className="contador__resta" onClick={restar}>-</button>
            {/* </div> */}

            {/* <button className="contador__carrito" onClick={addProduct} >Agregar al carrito</button>
            <p className="contador__stock">{stock} Productos disponibles</p>  */}
            {/* <button className='cart__cant--1'>{count}
                <button className='cart__cant--2' onClick={restar}><i class="ri-subtract-line"></i></button>
                <button className='cart__cant--3' onClick={sumar}><i class="ri-add-fill"></i></button>
            </button> */}

        </div>
    )
}


export default CantCart;