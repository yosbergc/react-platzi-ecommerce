import './productsidemenu.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
import { notificationContext } from '../../context/NotificationContext'
import { FaRegTrashAlt } from "react-icons/fa"
function ProductSideMenu({title, price, quantity, imgSrc, id}) {
    const { deleteProduct } = useContext(ShoppingCartContext)
    const { newNotification } = useContext(notificationContext)
    const handleDelete = () => {
        deleteProduct(id)
        newNotification('Deleted product succesfully')
    }
    return (<article className='productsidemenu'>
        <img src={imgSrc} alt={title} />
        <section className="product-information">
            <h3>{title} - <span>{quantity}</span></h3>
            <p>{price}$</p>
        </section>
        <button onClick={handleDelete}><FaRegTrashAlt size={20}/></button>
    </article>)
}
export default ProductSideMenu