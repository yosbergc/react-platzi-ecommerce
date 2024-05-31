function SingleOrder() {
    return (
      <main>
        <h2>My Order</h2>
        <section>
          Date: {date}
        </section>
        <section className="products">
          
        </section>

        <section className="bottom">
          <div>
            <h3>Total</h3>
            <p>{total}.00$</p>
          </div>
          <button>Back To Orders</button>
        </section>
      </main>
    )
  }
  
export default SingleOrder  