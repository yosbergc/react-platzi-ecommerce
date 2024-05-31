import './productsidemenu.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
import { FaRegTrashAlt } from "react-icons/fa"
function ProductSideMenu({title, price, quantity, imgSrc, id}) {
    const { deleteProduct } = useContext(ShoppingCartContext)
    const handleDelete = () => {
        deleteProduct(id)
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