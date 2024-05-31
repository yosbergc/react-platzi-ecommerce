import './checkoutsidemenu.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
import { OrderContext } from '../../context/OrderContext'
import { IoIosClose } from "react-icons/io";
import ProductSideMenu from '../ProductSideMenu';
import totalProducts from '../../utils/products'
function CheckoutSideMenu() {
    const { cart, inactiveCartModal, cartModal } = useContext(ShoppingCartContext)
    const { addOrder } = useContext(OrderContext)
    const handleOrder = () => { addOrder(cart) }
    if (cartModal){
        return (
        <section className='checkoutSideMenu'>
                <section className="upper-details">
                    <h2>Cart</h2>
                    <IoIosClose onClick={inactiveCartModal} size={30} className="close"/>
                </section>
                <section className="products">
                    {cart.length > 0 && cart.map(product => {
                        return <ProductSideMenu
                            imgSrc={product.images[0]}
                            title={product.title}
                            price={product.price}
                            key={product.title}
                            quantity={1}
                            id={product.id}
                        />
                    })}
                </section>
                <section className='bottom'>
                    <section className="total">
                        <h5>Total</h5>
                        <p>{totalProducts(cart)}$</p>
                    </section>
                    <button onClick={handleOrder}>BUY NOW</button>
                </section>
        </section>
        )
    }
}
export default CheckoutSideMenu