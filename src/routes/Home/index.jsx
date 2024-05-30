import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Phone from '../../components/Phone'
import CardContainer from '../../components/CardContainer'
import { useState, useEffect } from 'react'
import { getProducts } from '../../services/products'
import ProductDetails from '../../components/ProductDetails'
import './home.css'
function Home() {
    const [products, setProducts] = useState([])
    useEffect(() => {
      getProducts()
      .then(data => {
        setProducts(data)
      })
    }, [])
    return (<>
      <Hero/>
      <Categories/>
      <Phone />
      <CardContainer productList={products}/>
      <ProductDetails />
    </>
    )
  }
  
export default Home  