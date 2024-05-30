import './preheader.css'
import ReactCountryFlag from "react-country-flag"
function PreHeader() {
    return (
        <section className='preheader'>
            <section className="free-shipping">
            <p>FREE SHIPPING ON ORDERS OVER 50$</p>
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
        </section>
    )
}
export default PreHeader;