import { createContext, useState } from "react";
import React, { useContext } from "react";
export const useCartContext = () => useContext(CartContext)

export const CartContext = createContext();

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
        return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad} : product
      }))
    } else {
      setCart([...cart, {...item, cantidad}]);
    }
  }

  console.log(cart);

  const totalPrecio = () => {
    return cart.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
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

  useEffect(() => {
    totalPrecio();
  }, [cart])
  


  
  // const isInCart = (id) => {
  //   const valor = cart.some((prod) => prod.id === id);
  //   return valor;
  // };



  // const addToCart = (product, cantidad) => {
  //   if (isInCart(product.id)) {
  //     sumarCantidad(product, cantidad);
  //   } else {
  //     setCart([...cart, { ...product, cantidad }]);
  //   }
  // };


  // addToCart -> Recibimos product y cantidad pero p es un obj y c es una variable, para meter la variable en el obj hacemos {...product, cantidad}, ahora cantidad es una propiedad del objeto product

  // buscar la id del producto

  // corroborar si el producto ya está en el carrito (isInCart)
  
  

  //sumar cantidades del mismo producto


  // const sumarCantidad = (product, cantidad) => {
  //   const newCart = cart.map((prod) => {
  //     if (product.id === prod.id) {
  //       const newProduct = { ...prod, cantidad: cantidad + prod.cantidad };
  //       // console.log(newProduct);
  //       return newProduct;
  //     } else {
  //       return prod;
  //     }
  //   });
  //   setCart(newCart);
  // };

  // eliminar un solo producto pasandole el id
  
  
  // const removeItem = (itemId) => {
  //   const newCartFilter = cart.filter((item) => item.id !== itemId);
  //   setCart(newCartFilter);
  // };

  //todo: calcular total de unidades para el cart widget

  //todo: calcular total precio

  //vaciar todo el carrito


  // const clearCart = () => {
  //   setCart([]);
  // };
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
      cart
    }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// value es un objeto en el cual envia argumentos a cualquier lado de la app que lo llame. tenes que importarlo y llamar el argumento que vos quieras, sea funcion, array, obj

// const isInCart = (id) => {
//   return cart.some((prod) => prod.id === id);
// };

// if (isInCart(product.id)) {
//   sumarCantidad(product, cantidad);
// } else {
//   // console.log({...product, cantidad});
//   setCart([...cart, { ...product, cantidad }]);
// }