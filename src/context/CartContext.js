import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const useCartProvider = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState([]);
    const [contadorCarrito, setContadorCarrito] = useState(0)

    const AgregarAlCarritoCondicional = (item,id,cantidad) => {
        if(cart != ''){
            if (cart.some((prod) => prod.id === id)){
                console.log(cart)
                cart.find((prod) => prod.id === id)
                    cart[id].cantidad = cart[id].cantidad + cantidad;
                    setContadorCarrito(contadorCarrito + cantidad)
/*                  console.log('entre al find del cart.');
                    console.log(cart); */
            }
            else{
                setCart([...cart, item]);
                setContadorCarrito(contadorCarrito + cantidad)
/*                 console.log('entre aca. If y luego Else')
                console.log(item, cart) */
                console.log(cart)
            }
        }
        else{
            setCart([...cart, item])
            setContadorCarrito(contadorCarrito + cantidad)
/*             console.log('entre aca. Nunca entre al If, entonces vine pal Else.') */
/*             console.log(cart) */
        }
    }

    const vaciarCarrito = () => {
        setCart([]);
        console.log('vacie el carrito');
    }

    return (
        <CartContext.Provider value={{cart,vaciarCarrito ,AgregarAlCarritoCondicional, contadorCarrito}}>{children}</CartContext.Provider>
    )
}