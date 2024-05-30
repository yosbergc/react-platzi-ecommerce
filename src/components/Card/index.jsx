import './card.css'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/Products'
function Card({name, photoSrc, price, category, product}) {
    const { addProduct } = useContext(ShoppingCartContext)
    const handleClick = () => {addProduct(product)}
    return (
        <article className='card-single'>
            <figure style={{
                backgroundImage: `url('${photoSrc}')`,
                minHeight: '200px',
                backgroundSize: 'cover'
            }}>
                <span>{category}</span>
            </figure>   
            <section className='down'>
                <h3>{name}</h3>
                <p>{price}$</p>
                <button onClick={handleClick}>Add To Cart</button>
            </section>
            
        </article>
    )
}
export default Card