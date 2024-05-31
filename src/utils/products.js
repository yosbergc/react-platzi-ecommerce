export default function totalProducts(products) {
    return products.reduce((prev, curr) => prev + curr.price, 0)
}
