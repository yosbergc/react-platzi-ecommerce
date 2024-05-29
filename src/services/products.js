const URL = 'https://fakestoreapi.com/products'
function getProducts() {
    return fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
}
export { getProducts }