import React from "react"
import { IoIosClose } from "react-icons/io";
import { ShoppingCartContext } from "../../context/Products";
import { useContext } from "react";
import './productdetails.css'
function ProductDetails() {  
    const { productDetails, inactiveProductDetails } = useContext(ShoppingCartContext)
    if (productDetails) {
        const { title, category, description, image, price } = productDetails;
        return <section className="productDetails">
            <IoIosClose onClick={inactiveProductDetails} size={30} className="close"/>
            <img src={image} alt={title} />
            <span className="category">{category}</span>
            <h2>{title}</h2>
            <p>{description}</p>
            <p className="price">{price}$ <span className="price-original">{price + 19.99}</span></p>
            <button>Add To Cart</button>
        </section>
    }
}
export default ProductDetails