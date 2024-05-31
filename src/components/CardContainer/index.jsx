import Card from '../../components/Card'
import './cardcontainer.css'
function CardContainer({ productList }) {
    return (
        <>
        <section className='card-container'>
            {productList.length > 0 ? productList.map(product => {
        return <Card 
          name={product.title}
          category={product.category.name}
          photoSrc={product.images[0]}
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