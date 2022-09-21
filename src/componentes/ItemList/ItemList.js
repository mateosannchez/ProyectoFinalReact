import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ items }) => {
  

return (
  <div className='item__grid'>
    {items && items.map((producto) => (
      <Item producto={producto} key={producto.id} />
    ))}
    
  </div>
);
};

export default ItemList