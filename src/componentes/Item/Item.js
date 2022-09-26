import React from 'react'
import { Link } from 'react-router-dom';
import "../../App.css"
import { productos } from '../../Productos/Productos';
import { useCartContext } from '../../Context/CartContext';

const Item = ({ producto }) => {
  
  //const [goToCart, setGoToCart] = useState()
  
  // const { addProduct } = useCartContext();
  
  // const onAdd = (cantidad) => {
  //   console.log(`Agregaste ${cantidad} al carrito`);
  //   setGoToCart(true)
  //   addProduct(producto, cantidad)

  // };
  
  const { marca, modelo, precio, IMG, id } = producto;

  const divisa = "$";
  console.log();
  return (
    <div>
      <div className="item__grid--card">
        <div>
          <img
            className="item__grid--card--img"
            src={producto.IMG}
            alt=""
            width="250px"
            height="320px"
          />
        </div>
        <div>
          <p className="item__grid--name">{producto?.marca}</p>
          <p className="item__grid--subname">{producto.modelo}</p>
          <p className="item__grid--price">
            {divisa}
            {producto.precio}
          </p>
          <Link to={`/detail/${id}`}>
            <button className="item__grid--ver">
              <i className="ri-eye-line"></i>Ver
            </button>
          </Link>

          {/* <Link to={`/cart`}>
            <button className="dos">
              <i className="ri-shopping-cart-line card__buy "></i>
            </button>
          </Link> */}

          {/* {

            goToCart
              ? <Link to={`/cart/${id}`} className='dos'><i className="ri-shopping-cart-line card__buy "></i>Ir al carrito</Link>
              : <h1>ir al carrito</h1>

          } */}




        </div>
      </div>
    </div>
  );
};

export default Item 