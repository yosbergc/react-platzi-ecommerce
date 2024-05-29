import './card.css'
function Card({name, photoSrc, price, category}) {
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
                <button>Add To Cart</button>
            </section>
            
        </article>
    )
}
export default Card