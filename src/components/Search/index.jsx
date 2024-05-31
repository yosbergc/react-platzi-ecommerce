import './search.css'
function Search({category, search, setSearch}) {
    const handleChange = (e) => {
        setSearch(e.target.value)
    }
    return (<section className='searchContainer'>
        <label>Search your favorite {category}</label>
        <input type="text" className="search" placeholder="Search BlackTech" value={search} onChange={handleChange}></input>
        </section>
    )
}
export default Search