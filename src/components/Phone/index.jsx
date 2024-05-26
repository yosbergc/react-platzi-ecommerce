import './phone.css'
import PhoneImage from '../../assets/images/phone.webp'
function Phone() {
    return (
        <section className='phone'>
            <section className='information'>
                <h2>Galaxy S24 Ultra 5G 1TB</h2>
                <p className='description'>Industry-leading hardware meets revolutionary AI. Made with titanium. Built to last. 200 MP high resolution photographs and hyper-realistic games. Translate live. The easiest way to communicate. Go around it and find it. That easy. Supports adapter (45W), super fast charging and wireless charging.</p>
                <button>Get Now</button>
            </section>
            <img src={PhoneImage} alt='iPhone'/>
        </section>
    )
}
export default Phone;