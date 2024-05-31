import './productsidemenu.css'
function ProductSideMenu({title, price, quantity, imgSrc}) {
    return (<article className='productsidemenu'>
        <img src={imgSrc} alt={title} />
        <section className="product-information">
            <h3>{title} - <span>{quantity}</span></h3>
            <p>{price}$</p>
            
            <button>Delete</button>
        </section>
    </article>)
}
export default ProductSideMenu