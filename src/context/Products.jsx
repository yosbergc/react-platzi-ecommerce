import { createContext, useState } from "react";
const ShoppingCartContext = createContext()

function ProvideShoppingCart({ children }) {
    const [cart, setCart] = useState([]);
    
    function addProduct(product) {
        const newCart = [...cart];
        newCart.push(product)
        setCart(newCart)
    }

    return <ShoppingCartContext.Provider value={{
        cart,
        addProduct
    }
    }>
        {children}
    </ShoppingCartContext.Provider>
}
export { ShoppingCartContext, ProvideShoppingCart }