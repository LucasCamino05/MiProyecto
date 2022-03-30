import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = useContext(CartContext);

export const Cart = ({children}) => {

    const [cart, setCart] = useState([]);

    const AgregarAlCarritoCondicional = (item,id,cantidad) => {
        if(cart !== ''){
            if (cart.some((prod) => prod.id === id)){
                cart.find((prod) => prod.id === id)
                    cart[id].cantidad = cart[id].cantidad + cantidad;
                    console.log('entre al find del cart.');
                    console.log(item.cantidad);
            }
            else{
                setCart([...cart, item]);
                console.log('entre aca. If y luego Else')
            }
        }
        else{
            setCart([...cart, item])
            console.log('entre aca. Nunca entre al If, entonces vine pal Else.')
        }
    }

    const vaciarCarrito = () => {
        setCart([]);
        console.log('vacie el carrito');
    }

    return (
        <CartContext.Provider value={{
            
        }}>
            {children}
        </CartContext.Provider>
    )
}