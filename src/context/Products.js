import { createContext, useState } from "react";
const ShoppingCartContext = createContext()

function ProvideShoppingCart({ children }) {
    const [cart, setCart] = useState([]);
    
    return <ShoppingCartContext.Provider>
        {children}
    </ShoppingCartContext.Provider>
}
export { ShoppingCartContext, ProvideShoppingCart }