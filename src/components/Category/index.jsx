/* eslint-disable react/prop-types */
import './category.css'
function Category({ imgSrc, categoryName, className, description }) {
    return (
        <section className={`category-single ${className}`}>
            <img src={imgSrc} alt={categoryName} />
            <section className="information">
                <h2>{categoryName}</h2>
                <p>{description}</p>
                <button>Shop Now</button>
            </section>
        </section>
    )
}
export default Category