/* eslint-disable react/prop-types */
import './category.css'
function Category({ imgSrc, categoryName, className, description }) {
    return (
        <section className={`category-single ${className}`} style={
            {background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${imgSrc})`}}>
            <section className="information">
                <h2>{categoryName}</h2>
                <p>{description}</p>
                <button>Shop Now</button>
            </section>
        </section>
    )
}
export default Category