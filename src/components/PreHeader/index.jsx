import './preheader.css'
import ReactCountryFlag from "react-country-flag"
function PreHeader() {
    return (
        <section className='preheader'>
            <section className="free-shipping">
            <p>Free Shipping On Orders Over $50 in</p>
            <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }}
                title="US"
            />
            <ReactCountryFlag
                countryCode="VE"
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }}
                title="VE"
            />
            <ReactCountryFlag
                countryCode="MX"
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }}
                title="MX"
            />
            <ReactCountryFlag
                countryCode="ES"
                svg
                style={{
                    width: '20px',
                    height: '20px',
                }}
                title="ES"
            />
            </section>
            
            
            <p>Buy Wholesale Products Online With Over 100.000 Brands</p>
        </section>
    )
}
export default PreHeader;