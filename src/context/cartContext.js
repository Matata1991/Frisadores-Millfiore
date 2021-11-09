import { useState, createContext } from "react";

export const cartContext = createContext( [] )

export default function CartContextProvider( { children } ) {
    
    const [cartList, setCartList] = useState([])

    const añadirAlCarrito = itemNuevo => {
        let previousCart = [...cartList]
    
        if (previousCart.some(producto => producto.item.id === itemNuevo.item.id)) {
            previousCart.find(producto => producto.item.id === itemNuevo.item.id).cantidad +=
            itemNuevo.cantidad
            setCartList(previousCart)
        } else {
            setCartList([...cartList, itemNuevo])
        }
    }
    function vaciarCarrito() {
        setCartList([])
    } 

    const eliminarDelCarrito = (itemNuevo) => { 
        const EliminarItem = cartList.filter(producto => producto.item.id !== itemNuevo.item.id)
        setCartList([...EliminarItem]) 
    }    
    const cartIcon = () => { 
        return cartList.reduce((acum, valor) => acum + valor.cantidad, 0)
    }   
    const totalPrecios = () => { 
        return cartList.reduce((acum, valor) => (acum + (valor.cantidad * valor.item.precio)), 0)
    } 
    return (
        <cartContext.Provider value={{
            cartList,
            añadirAlCarrito,
            vaciarCarrito,
            eliminarDelCarrito,
            cartIcon,
            totalPrecios
        }}>
            { children }
        </cartContext.Provider>
    )
}