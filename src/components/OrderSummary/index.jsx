import './orderSummary.css'
function OrderSummary({totalPrice, productQuantity, date}) {
    return (<tr>
        <th>
            <td>{date}</td>
        </th>
        <th className='paid'>
            <td>Paid</td>
        </th>
        <th>
            <td>{totalPrice}.00$</td>
        </th>
        <th>
            <td>{productQuantity}</td>
        </th>
        <th>
            <button className='watchOrder'>See Order</button>
        </th>
    </tr>)
}
export default OrderSummary