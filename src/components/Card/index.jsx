import './card.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
import { IoIosAddCircle } from "react-icons/io"
function Card({name, photoSrc, price, category, product}) {
    const { addProduct, activeProductDetails } = useContext(ShoppingCartContext)
    const handleClick = (e) => {
        e.stopPropagation()
        addProduct(product)
    }
    const handleProduct = () => {activeProductDetails(product)}
    return (
        <article className='card-single' onClick={handleProduct}>
            <section className="info">
                <figure style={{
                    backgroundImage: `url('${photoSrc}')`,
                    minHeight: '200px',
                    backgroundSize: 'cover'
                }}>
                    <span>{category}</span>
                    <IoIosAddCircle size={30} onClick={handleClick} color='white'/>
                </figure>   
                <section className='down'>
                    <h3>{name}</h3>
                </section>
            </section>
            <section className="last-part">
                <p>{price}$</p>
            </section>
        </article>
    )
}
export default Card