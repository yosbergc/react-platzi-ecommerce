import './cart.css'
import { BsCart2 } from "react-icons/bs";
import { ShoppingCartContext } from '../../context/CartContext.jsx';
import { useContext } from 'react';
function Cart() {
    const { cart, activeCartModal } = useContext(ShoppingCartContext)
    return (
        <section className='cart' onClick={activeCartModal}>
            <BsCart2 size={20}/>
            <p>{cart.length}</p>
        </section>
    )
}
export default Cart