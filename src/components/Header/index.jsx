import './header.css'
import Logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { FaRegUser } from "react-icons/fa"
import Cart from '../Cart'
function Header() {
    return (
        <header>
            <section className='left'>
                <img src={Logo} alt="BlackTech" className='headerLogo'/>
                <nav>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/laptops'>
                                Laptops
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/electronics'>
                                Earphones
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/keyboards'>
                                Keyboards
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/tvs'>
                                TVs
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/category/tablets'>
                                Tablets
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </section>
            <section className='right'>
                <nav>
                    <ul>
                        <li>
                            <NavLink to="account">
                                My Account
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="my-orders">
                                My Orders
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <FaRegUser size={20}/>
                <Cart/>
            </section>
        </header>
    )
}
export default Header