import { createContext, useState } from "react";
const ShoppingCartContext = createContext()

function ProvideShoppingCart({ children }) {
    const [cart, setCart] = useState([]);
    const [productDetails, setProductDetails] = useState(false)
    function addProduct(product) {
        const newCart = [...cart];
        newCart.push(product)
        setCart(newCart)
    }
    const activeProductDetails = (product) => {setProductDetails(product)}
    const inactiveProductDetails = () => {setProductDetails(false)}
    return <ShoppingCartContext.Provider value={{
        cart,
        addProduct,
        productDetails,
        activeProductDetails,
        inactiveProductDetails
    }
    }>
        {children}
    </ShoppingCartContext.Provider>
}
export { ShoppingCartContext, ProvideShoppingCart }