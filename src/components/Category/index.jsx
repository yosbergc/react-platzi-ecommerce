/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import './category.css'
function Category({ imgSrc, categoryName, className, description, link }) {
    const navigate = useNavigate()
    const handleNavigate = () => { navigate(link)}
    return (
        <section className={`category-single ${className}`} style={
            {background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.9)), url(${imgSrc})`, backgroundSize: 'cover'}} onClick={handleNavigate}>
            <section className="information">
                <h2>{categoryName}</h2>
                <p>{description}</p>
                <button onClick={handleNavigate}>Shop Now</button>
            </section>
        </section>
    )
}
export default Category