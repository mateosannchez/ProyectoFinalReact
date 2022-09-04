import React from 'react';
import "../../App.css"




const ItemDetail = ({ data }) => {
  const divisa = "$"
  console.log(data)
  return (
    <div className="container">
      <div className="detail">
        <img src={data[0].IMG} alt="" className="detail__img" />
        <div className="content">
          <h5 className='content__ruta'>ruta categoria</h5>
          <h1 className='content__title'>{data[0].marca}<br/>{data[0].modelo}</h1>
          
          <h2 className='content__price'>{divisa}{data[0].precio}</h2>
          <p className="content__text">Vas a poder aprovechar esta oferta en cualquier producto de la tienda.</p>
          <h6 className='content__title--t'>Talles</h6>
          <select className='content__talle' name="select">
            <option value="talle39">Talle 39</option>
            <option value="talle40">Talle 40</option>
            <option value="talle41">Talle 41</option>
            <option value="talle42">Talle 42</option>
            <option value="talle43">Talle 43</option>
          </select>
          

        </div>
      </div>
    </div>
  )
}


export default ItemDetail;