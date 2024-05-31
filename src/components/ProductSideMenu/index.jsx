function ProductSideMenu({title, price, quantity, imgSrc}) {
    return (<article>
        <img src={imgSrc} alt="" />
        <h3>{title}</h3>
        <p>{price}</p>
        <span>{quantity}</span>
        <button>Delete</button>
    </article>)
}
export default ProductSideMenu