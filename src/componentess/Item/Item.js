import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import { productos } from "../../Productos/Productos";


const Item = ({ product }) => {
  const { marca, modelo, precio, IMG, id } = product;

  const divisa = "$";
  console.log(id);
  return (
    <div>
      <div className="item__grid--card">
        <div>
          <img
            className="item__grid--card--img"
            src="https://i.pinimg.com/originals/3b/29/28/3b2928a7c588e177f04989de3c7cb9e8.png"
            alt=""
            width="250px"
            height="320px"
          />
        </div>
        <div>
          <p className="item__grid--name">{product.marca}</p>
          <p className="item__grid--subname">{product.modelo}</p>
          <p className="item__grid--price">
            {divisa}
            {product.precio}
          </p>
          <Link to={`/detail/${id}`}>
            <button className="item__grid--ver">
              <i className="ri-eye-line"></i>Ver
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
