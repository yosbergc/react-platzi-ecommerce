import Card from '../../components/Card'
import './cardcontainer.css'
function CardContainer({ productList }) {
    return (
        <>
        <h4>Some products that you might be interested</h4>
        <section className='card-container'>
            {productList.length > 0 ? productList.map(product => {
        return <Card 
          name={product.title}
          category={product.category}
          photoSrc={product.image}
          price={product.price}
          key={product.id}
          product={product}
        />
      }) : "We don't have products"
      }
    </section>
    </>
    )
}
export default CardContainer