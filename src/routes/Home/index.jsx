import Hero from '../../components/Hero'
import Category from '../../components/Category'
import Laptop from '../../assets/images/laptop.webp'
import Headphones from '../../assets/images/headphones.webp'
import Keyboards from '../../assets/images/keyboards.webp'
import Tablets from '../../assets/images/tablet.webp'
import './home.css'
function Home() {
    return (<>
      <Hero/>
      <section className='categories'>
        <Category categoryName="Laptops" imgSrc={Laptop} className="Laptops" description="Laptops provide the maximum computing power in a portable form. Whether you need one for work, gaming, or home use, modern laptops offer cutting-edge quality and versatility."/>
        <Category categoryName="Headphones" imgSrc={Headphones} className="Headphones" description="Headphones deliver audio excellence. Whether you’re commuting, working out, or simply enjoying music, high-quality headphones."/>
        <Category categoryName="Keyboards" imgSrc={Keyboards} className="Keyboards" description="Keyboards are essential input devices for computers. They come in various types, including mechanical, membrane, and chiclet. Enhance your typing experience with a quality keyboard."/>
        <Category categoryName="Tablets" imgSrc={Tablets} className="Tablets" description="Tablets combine portability and touchscreens, perfect for browsing, media consumption, and light productivity. Consider the Magic Keyboard for iPad Pro to enhance your tablet experience."/>
      </section>
    </>
    )
  }
  
export default Home  