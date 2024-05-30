const URL = 'https://api.escuelajs.co/api/v1/products'
function getProducts() {
    return fetch(URL)
    .then(res => res.json())
    .then(data => data)
    .catch(error => error)
}
export { getProducts }