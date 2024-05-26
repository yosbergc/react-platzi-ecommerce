import HeroImage from '../../assets/images/HeroImage.png'
import { Link } from 'react-router-dom'
import './hero.css'
function Hero() {
    return (
        <section className='hero-setion'>
            <div>
                <h3>Raise Your Rank With New Headsets</h3>
                <h1>SONY <span>MERCURIAL X2230</span></h1>
                <p>The Sony MERCURIAL X2230 headphones are industry leaders in noise cancellation, featuring Dual Noise Sensor technology. With a frequency response range of 4 Hz to 40,000 Hz, these closed, dynamic headphones deliver next-level music quality</p>
                <Link to="product/:product" className='addToCartHero'>Add to Cart</Link>
                <Link to="product/:product" className='addToCartHeroSecondary'>About More</Link>
            </div>
            <figure>
                <img src={HeroImage} alt='Earphones Hero Section'/>
            </figure>
        </section>
    )
}
export default Hero