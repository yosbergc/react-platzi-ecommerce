import { useParams } from "react-router-dom"
import { useContext } from "react"
import { OrderContext } from '../../context/OrderContext'
import { Link } from "react-router-dom"
import ProductBought from '../../components/ProductBought'
import './singleorder.css'
function SingleOrder() {
    const { id } = useParams()
    const { orders } = useContext(OrderContext)
    const order = orders.find(order => order.id === id)
    return (
      <main>
        <h2>My Order - {id}</h2>
        <section>
          Date: {order.date}
        </section>
        <h3 className="product">Products</h3>
        <section className="products">
          {order.products.map(product => {
            return <ProductBought 
              imgSrc={product.images[0]}
              title={product.title}
              price={product.price}
              key={product.title}
              id={product.id}
            />
          })}
        </section>

        <section className="bottom">
          <div>
            <h3>Total</h3>
            <p>{order.totalPrice}.00$</p>
          </div>
          <Link to={'/my-orders'} className="buttonOrder">Back To Orders</Link>
        </section>
      </main>
    )
  }
  
export default SingleOrder  