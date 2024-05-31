import React from "react"
import { IoIosClose } from "react-icons/io";
import { ShoppingCartContext } from "../../context/CartContext";
import { useContext } from "react";
import './productdetails.css'
function ProductDetails() {  
    const { productDetails, inactiveProductDetails, addProduct } = useContext(ShoppingCartContext)
    const handleProduct = () => {
        addProduct(productDetails)
        inactiveProductDetails()
    }
    if (productDetails) {
        const { title, category, description, images, price } = productDetails;
        return <section className="productDetails">
            <section className="upper-details">
                <h2>Product Details</h2>
                <IoIosClose onClick={inactiveProductDetails} size={30} className="close"/>
            </section>
            <img src={images[0]} alt={title} />
            <span className="category">{category.name}</span>
            <h2 className="productName">{title}</h2>
            <p>{description}</p>
            <p className="price">{price}$ <span className="price-original">{price + 19.99}</span></p>
            <button onClick={handleProduct}>Add To Cart</button>
        </section>
    }
}
export default ProductDetails