import './orderSummary.css'
import { Link } from 'react-router-dom'
function OrderSummary({totalPrice, productQuantity, date, id}) {
    return (<tr>
        <td>{id}</td>
        <td>{date}</td>
        <td className='paid'>Paid</td>
        <td>{totalPrice}.00$</td>
        <td>{productQuantity}</td>
        <td><Link to={`/order/${id}`} className='buttonOrder'>See Now</Link></td>
    </tr>)
}
export default OrderSummary