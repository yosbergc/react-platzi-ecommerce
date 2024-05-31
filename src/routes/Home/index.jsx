import Hero from '../../components/Hero'
import Categories from '../../components/Categories'
import Phone from '../../components/Phone'
import CardContainer from '../../components/CardContainer'
import { useState, useEffect } from 'react'
import { getProducts } from '../../services/products'
import ProductDetails from '../../components/ProductDetails'
import CheckoutSideMenu from '../../components/CheckoutSideMenu'
import Notification from '../../components/Notification'
import { useContext } from 'react'
import { ProvideNotification } from '../../context/NotificationContext'
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
      <ProvideNotification>
        <CardContainer productList={products}/>
        <ProductDetails />
        <CheckoutSideMenu />
        <Notification />
      </ProvideNotification>
    </>
    )
  }
  
export default Home  