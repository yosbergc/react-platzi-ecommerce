import './card.css'
import React from 'react'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../context/CartContext'
import { notificationContext } from '../../context/NotificationContext'
import { IoIosAddCircle } from "react-icons/io"
import { FaCheckCircle } from "react-icons/fa"
function Card({name, photoSrc, price, category, product}) {
    const { addProduct, activeProductDetails, cart } = useContext(ShoppingCartContext)
    const { newNotification } = useContext(notificationContext)
    const productIsInCart = cart.some(productoInCart => productoInCart.id === product.id)
    const handleClick = (e) => {
        e.stopPropagation()
        addProduct(product)
        newNotification('Added product to cart succesfully')
    }
    const handleProduct = () => {activeProductDetails(product)}
    const icon = productIsInCart ? <FaCheckCircle size={25} color='black'/>
    : <IoIosAddCircle size={30} onClick={handleClick} color='white'/>
    return (
        <article className='card-single' onClick={handleProduct}>
            <section className="info">
                <figure style={{
                    backgroundImage: `url('${photoSrc}')`,
                    minHeight: '200px',
                    backgroundSize: 'cover'
                }}>
                    <span>{category}</span>
                    {icon}
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