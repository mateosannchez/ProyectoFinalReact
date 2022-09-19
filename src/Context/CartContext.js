import { createContext, useState } from "react";
import React, { useContext } from "react";
export const useCartContext = () => useContext(CartContext)
const CartContext = createContext();


const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);


  const clearCart = () => setCart([]);
  const isInCart = (id) => cart.find(product => product.id === id)
  const removeProduct = (id) => setCart(cart.filter(product => product.id !== id))

  // const addProduct = (item, newCantidad) => {
  //   const newCart = cart.filter(prod => prod.id !== item.id);
  //   newCart.push({ ...item, cantidad: newCantidad});
  //   setCart(newCart)
  // }

  const addProduct = (item, cantidad) => {
    if (isInCart(item.id)) {
      setCart(cart.map(product => {
        return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
      }))
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  }

  console.log(cart);

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  }

  function edditCart(product) {
    const actualizarCart = [...cart];
    setCart(actualizarCart)
  }
  const clear = () => {
    setCart([])
  }

  const totalProduc = () => cart.reduce((acumulador, producActual) => acumulador + producActual.cantidad, 0);

  const borrarUno = (id) => {
    const filtrarProduc = cart.filter((prod) => prod.id !== id);
    setCart(filtrarProduc);
  };

  const productCantidad = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.cantidad;
  }



  return (
    <CartContext.Provider value={{
      clearCart,
      isInCart,
      removeProduct,
      addProduct,
      totalPrecio,
      totalProduc,
      borrarUno,
      productCantidad,
      edditCart,
      clear,
      cart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};


export default CartProvider;
