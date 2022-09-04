import React from 'react'
import "../../App.css"

const Item = ({ producto }) => {

  const { marca, modelo, precio, IMG } = producto;

  const divisa = '$';

  return (

    <div>

      <div className='item__grid--card' >
        
        <div  >
          <img className='item__grid--card--img' src={IMG} alt="" width="250px" height="320px" />
        </div>
        <div>
          <p className='item__grid--name'>{marca}</p>
          <p className='item__grid--subname'>{modelo}</p>
          <p className='item__grid--price'>{divisa}{precio}</p>
          <button className='item__grid--ver'><i className="ri-eye-line"></i>Ver</button>
          
        </div>
        
        
      </div>




      {/* <div className="container">


        <div className="row">
          <div className="col-4" >
            <h1>Columna 1</h1>
            <p>Esto es una prueba de bootstrap.</p>
          </div>
          <div class="col-4" >
            <h1>Columna 2</h1>
            <p>Esto es una prueba de bootstrap.</p>
          </div>
          <div class="col-4" >
            <h1>Columna 3</h1>
            <p>Esto es una prueba de bootstrap.</p>
          </div>
        </div>
      </div> */}

    </div>


  )
      

}


      export default Item 