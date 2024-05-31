import './productbought.css'
function ProductBought({imgSrc, title, price}) {
    return <article className="productBought">
        <img src={imgSrc} alt={title} />
        <section className="information">
            <h4>{title}</h4>
            <p>{price}.00$</p>
        </section>
    </article>
}
export default ProductBought