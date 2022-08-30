import React, { useEffect, useState } from "react";
import { productos } from "../../Productos/Productos";
import ItemCount from "../Contador/Contador"
import "../../App.css"

const Section = (props) => {
    const [items, setItems] = useState([]);

    const producto = new Promise((res, rej) => {
        setTimeout(() => {
            res(productos);
        }, 1000);
    });

    useEffect(() => {

    }, [])

    console.log(items)

    // producto
    // .then((data) => {
    //     // setItems(data)
    //     console.log("then: ", data);
    //     })
    //     .catch((error) => {
    //         // console.log("catch: ", error);
    //     })
    //     .finally(() => {
    //         // console.log("finally");
    //     });

    useEffect(() => {}, []);

    

    return (
        <section className="section">

        {items.map((item) => {
            return <h1>{item.marca}</h1>
        })}

        
        <div>
            
            <h1>Productos</h1>
            <h2>Marca: {props.marca}</h2>
            <h3>Modelo: {props.modelo}</h3>
            <h3>Precio: {props.precio}</h3>

        </div>
           
        </section>
    )
};

export default Section