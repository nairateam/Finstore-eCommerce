import './Header.css'
import { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userIcon from '../../assets/icons/usericon.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import { faCartShopping, faEnvelope, faSearch, faHeart, faBars, faCaretDown,
    faShop, faPhone, faClose } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'

const nav__links = [
    {
        path: '/',
        show: 'Home'
    },
    {
        path: 'shop',
        show: 'Products'
    },
    {
        path: 'cart',
        show: 'Cart'
    }
]

const Header = ({setSearch}) => {

    const menuBar = useRef();
    const navigate = useNavigate()
    const totalQuantity = useSelector(state=> state.cart.totalQuantity)

    const showMenu = () => {
        menuBar.current.classList.toggle('res__menu')
    }
    const goToCart =()=> {
        navigate('/cart')
    }

    return <motion.header 
        initial={{opacity: 0, y: -200}}
        animate={{opacity: 1, y: 0}}
        transition={{delay: .2, duration: 1.2}}
        id="header">
        <div className="main__head">
            <div className="mid_main">
                <p><FontAwesomeIcon icon={faEnvelope} /> info@finstore.com</p>
                <p><FontAwesomeIcon icon={faPhone} /> +2348121538461</p>
            </div>
            <div className="mid_main mid_main_two">
                <p>English 	<FontAwesomeIcon icon={faCaretDown} /></p>
                <p>USD 	<FontAwesomeIcon icon={faCaretDown} /></p>
            </div>
        </div>
        <div className="top__head">
            <div className="switch_secure">
                <div className="mobile__nav">
                        <motion.button
                        onClick={showMenu}
                        whileTap={{scale: 1.5,}}>
                            <FontAwesomeIcon icon={faBars} />
                        </motion.button>
                </div>
            </div>
            <Link to='/'><h1><FontAwesomeIcon icon={faShop} color='#7E33E0' /> Finstore</h1></Link>
            <nav ref={menuBar}>
                    <motion.button
                    onClick={showMenu}
                    whileTap={{scale: 1.5}}>
                        <FontAwesomeIcon icon={faClose} />
                    </motion.button>
                <ul>
                    {
                        nav__links.map((object)=>(
                            <li>
                                <NavLink to={object.path} className={({ isActive })=> isActive ? "active__nav" : ''} end>{object.show}</NavLink>
                            </li>
                        ))
                    }
                    {/* <li>
                        <NavLink to='home'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='shop'>Products</NavLink>
                    </li>
                    <li>
                        <NavLink to='cart'>Cart</NavLink>
                    </li> */}
                </ul>
            </nav>
            <div className="nav__icons">
                <div className="search__bar">
                    <input type="text" placeholder='search item' onChange={setSearch} />
                    <span><FontAwesomeIcon icon={faSearch} color='rgba(0, 0, 0, 0.808)' /></span>
                </div>
                <span className="cart__icon">
                    <FontAwesomeIcon icon={faHeart} color='#7E33E0' />
                    <span className='item_badge'>0</span>
                </span>
                <span className="wish__icon" onClick={goToCart}>
                    <FontAwesomeIcon icon={faCartShopping} color='#7E33E0' />
                    <span className='item_badge'>{totalQuantity}</span>
                </span>
                <span> <motion.img 
                    whileTap={ {scale: 1.2} }
                    src={userIcon} alt="profile" /> </span>

            </div>
        </div>
    </motion.header>
}
 
export default Header;