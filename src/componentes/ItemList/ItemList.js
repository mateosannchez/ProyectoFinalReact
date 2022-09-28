import React from 'react'
import Item from '../Item/Item';


const ItemList = ({ items }) => {


  return (
    <div className='item__grid'>
      {items && items.map((producto) => (
        <Item producto={producto} key={producto.id} />
      ))}

    </div>

    // <div className='container-fluid col-sm-6 '>
    //   <div className="row">
    //     <div className="col-lg-4">
    //       {items && items.map((producto) => (
    //         <Item producto={producto} key={producto.id} />
    //       ))}
    //     </div>
    //   </div>
    // </div>
  );
};

export default ItemList