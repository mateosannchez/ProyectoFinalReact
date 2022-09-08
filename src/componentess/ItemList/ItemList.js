import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="item__grid">
      {products.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}
    </div>
  );
};

export default ItemList;
