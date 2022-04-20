import { createContext, useContext, useState } from "react";

export const CartContext = createContext();
export const useCartProvider = () => useContext(CartContext);
export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [contadorCarrito, setContadorCarrito] = useState(0)

    const AgregarAlCarritoCondicional = (item,id,cantidad) => {
        if(cart !== ''){
            if (cart.some((prod) => prod.id === id)){
                console.log(cart)
                cart.find((prod) => prod.id === id)
                    cart[id].cantidad = cart[id].cantidad + cantidad;
                    setContadorCarrito(contadorCarrito + cantidad)
            }
            else{
                setCart([...cart, item]);
                setContadorCarrito(contadorCarrito + cantidad)
            }
        }
        else{
            setCart([...cart, item])
            setContadorCarrito(contadorCarrito + cantidad)
        }
    }

    const emptyCart = () => {
        setCart([]);
        setContadorCarrito(0)
    }

    const totalCart = () => {
        return cart.reduce(
          (acc, product) => acc + (product.cantidad * product.precio),
          0
        );
      };
      const eliminarDeCarrito = (item) =>{
        console.log(item);
        if (cart.some(product => product.id === item.id)) {
            const remove = cart.filter((product) => product.id !== item.id);
            setCart(remove)
            setContadorCarrito(prev => prev - item.cantidad)
        }
    }
    return (
        <CartContext.Provider value={{
            cart,
            emptyCart,
            AgregarAlCarritoCondicional,
            totalCart,
            contadorCarrito,
            eliminarDeCarrito
        }}>
            {children}
        </CartContext.Provider>
    )
}