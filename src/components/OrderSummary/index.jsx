import './orderSummary.css'
function OrderSummary({totalPrice, productQuantity, date}) {
    return (<tr>
        <td>{date}</td>
        <td className='paid'>Paid</td>
        <td>{totalPrice}.00$</td>
        <td>{productQuantity}</td>
        <td><button className='watchOrder'>See Order</button></td>
    </tr>)
}
export default OrderSummary