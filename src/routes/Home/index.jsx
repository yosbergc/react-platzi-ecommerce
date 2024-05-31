import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Phone from '../../components/Phone'
import CardContainer from '../../components/CardContainer'
import { getProducts } from '../../services/products'
import ProductDetails from '../../components/ProductDetails'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import Notification from '../../components/Notification'
import capitalizeFirstLetter from '../../utils/words'
import './home.css'
function Home() {
    const { category } = useParams()
    const [products, setProducts] = useState([])
    useEffect(() => {
      getProducts()
      .then(data => {
        setProducts(data)
      })
    }, [])
    return (<>
      {
        !category && <>
          <Hero/>
          <Categories/>
          <Phone />
        </>
      }
      {
        category ?
        <section className="heading">
          <h4>{capitalizeFirstLetter(category)}</h4>
        </section> :
        <section className="heading">
          <h4>New Releases</h4>
        </section>
      }
        <CardContainer productList={products}/>
        <ProductDetails />
        <CheckoutSideMenu />
        <Notification />
    </>
    )
  }
  
export default Home  