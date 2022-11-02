import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Shop from '../pages/Shop'
import Login from '../pages/Login'
import Complete from '../pages/Complete'
import Cart from '../pages/Cart'
import Checkout from '../pages/Checkout'
import Signup from '../pages/Signup'
import ProductDetails from '../pages/ProductDetails'

function Routers() {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='shop' element={<Shop />} />
    <Route path='login' element={<Login />} />
    <Route path='cart' element={<Cart />} />
    <Route path='checkout' element={<Checkout />} />
    <Route path='signup' element={<Signup />} />
    <Route path='completed' element={<Complete />} />
    <Route path='shop/:id' element={<ProductDetails />} />

  </Routes>
}

export default Routers