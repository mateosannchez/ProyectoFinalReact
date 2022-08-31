import React, { useEffect, useState } from "react";
import { productos } from "../../Productos/Productos";
import "../../App.css"
import ItemList from "../ItemList/ItemList";

const Section = (props) => {
    const [items, setItems] = useState([]);

    const [products, setProducts] = useState([]);



    const producto = new Promise((res, rej) => {

        res(productos);

    });


    useEffect(() => {
        producto
            .then((data) => {
                setProducts(data)
            })

    }, []);




    return (
        <>
            <ItemList
                products={products}
            />
            <section className="hola">


            </section>
        </>
    )
};

export default Section