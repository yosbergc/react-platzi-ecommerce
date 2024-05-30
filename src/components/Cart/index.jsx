import './cart.css'
import { BsCart2 } from "react-icons/bs";
import { ShoppingCartContext } from '../../context/Products.jsx';
import { useContext } from 'react';
function Cart() {
    const { cart } = useContext(ShoppingCartContext)
    return (
        <section className='cart'>
            <BsCart2 size={20}/>
            <p>{cart.length}</p>
        </section>
    )
}
export default Cart