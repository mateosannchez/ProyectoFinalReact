import React from "react";
import "../../App.css"

const Section = (props) => {
    return (
        <section className="section">


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