import './cart.css'
import { BsCart2 } from "react-icons/bs";
function Cart() {
    return (
        <section className='cart'>
            <BsCart2 size={20}/>
            <p>0</p>
        </section>
    )
}
export default Cart