import './myorders.css'
import { useContext } from 'react'
import { OrderContext} from '../../context/OrderContext'
import OrderSummary from '../../components/OrderSummary'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import Notification from '../../components/Notification'
function MyOrders() {
    const { orders } = useContext(OrderContext)
    return (
      <main>
        <h2>My Orders</h2>
        <table className='orders'>
          <thead>
            <tr className='header'>
              <th>ID</th>
              <th>Date</th>
              <th>Payment</th>
              <th>Total</th>
              <th>Items</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
          {orders.length > 0 ? orders.map(order => {
            return <OrderSummary 
              date={order.date}
              productQuantity={order.quantityProducts}
              totalPrice={order.totalPrice}
              key={order.id}
              id={order.id}
            />
          }) : <tr><td colSpan="5" className='notOrders'>You don't have orders</td></tr>}
          </tbody>
        </table>
        <CheckoutSideMenu />
        <Notification />
      </main>
    )
  }
  
export default MyOrders  