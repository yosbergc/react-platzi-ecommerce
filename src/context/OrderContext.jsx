import React, { createContext } from "react";
import moment from "moment";
import totalProducts from "../utils/products";
import { useContext } from "react";
import { ShoppingCartContext } from "./CartContext";
import { notificationContext } from "./NotificationContext";
const OrderContext = createContext()

function ProvideOrder({children}) {
    const { orderedCart } = useContext(ShoppingCartContext)
    const { newNotification } = useContext(notificationContext)
    const [orders, setOrders] = React.useState([])
    function addOrder(products) {
        const orderToAdd = {
            date: moment().format('L'),
            products,
            quantityProducts: products.length,
            totalPrice: totalProducts(products)
        }
        const newOrders = [...orders]
        newOrders.push(orderToAdd)
        setOrders(newOrders)
        newNotification('Order added')
        orderedCart()
    }
    return <OrderContext.Provider value={{
        orders,
        addOrder
    }}>
        {children}
    </OrderContext.Provider>
}
export { OrderContext, ProvideOrder }