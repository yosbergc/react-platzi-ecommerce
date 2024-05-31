import './productsidemenu.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
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
            
            <button onClick={handleDelete}>Delete</button>
        </section>
    </article>)
}
export default ProductSideMenu