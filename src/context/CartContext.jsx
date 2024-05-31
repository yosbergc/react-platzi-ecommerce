import { createContext, useState } from "react";
const ShoppingCartContext = createContext()

function ProvideShoppingCart({ children }) {
    const [cart, setCart] = useState([]);
    const [productDetails, setProductDetails] = useState(false)
    const [cartModal, setCartModal] = useState(false)
    function addProduct(product) {
        const newCart = [...cart];
        newCart.push(product)
        setCart(newCart)
    }
    function deleteProduct(productId) {
        const newCart = [...cart];
        const productIndex = newCart.findIndex(product => product.id === productId)
        newCart.splice(productIndex, 1)
        setCart(newCart)
    }
    function orderedCart() {
        setCart([])
    }
    const activeCartModal = () => {setCartModal(true)}
    const inactiveCartModal = () => {setCartModal(false)}
    const activeProductDetails = (product) => {setProductDetails(product)}
    const inactiveProductDetails = () => {setProductDetails(false)}
    return <ShoppingCartContext.Provider value={{
        cart,
        cartModal,
        addProduct,
        productDetails,
        activeProductDetails,
        inactiveProductDetails,
        activeCartModal,
        inactiveCartModal,
        deleteProduct,
        orderedCart
    }
    }>
        {children}
    </ShoppingCartContext.Provider>
}
export { ShoppingCartContext, ProvideShoppingCart }