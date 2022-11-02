import Meta from "../components/Header/Meta/Meta";
import PageHead from "../components/Layout/PageHead";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import '../styles/Cart.css'
import empty from '../assets/icons/mtcart.png'
import { Link } from "react-router-dom";
import { cartActions } from "../store/slices/sliceCart";
import { useSelector, useDispatch } from "react-redux";

const Cart = () => {

    const cartItems = useSelector(state=> state.cart.cartItems)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    return ( 
        <>
        <Meta title='Cart' />
        <PageHead title='Shopping' page='cart' />
        <div className="container cart">
            <div className="cart_items">
                {
                    cartItems.length===0 ? <div className="emptyCart">
                        <img src={empty} alt="" />
                        <h2>Cart Is Empty!</h2>
                    </div> : 
                    <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td><img src={demoP} alt="" /></td>
                            <td>$200</td>
                            <td>5</td>
                            <td>$400</td>
                        </tr> */}
                        {
                            cartItems.map((item, index)=>(
                                <Tr key={index} item={item} />
                            ))
                        }
                    </tbody>

                </table>
                }
                <div className="cart_btn">
                    <Link to='/shop'><button>Update Cart</button></Link>
                    <button>Clear Cart</button>
                </div>
            </div>
            <div className="total_wrap">
                <div className="cart_total">
                    <p>Cart Totals</p>
                    <div className="total_box">
                        <span>
                            <p>Subtotals:</p>
                            <p>${totalAmount}</p>
                        </span>
                        <span>
                            <p>Totals:</p>
                            <p>${totalAmount}</p>
                        </span>
                        <div className="checkbox">
                            <input type="checkbox" name="" id="" /> Shipping & taxes calculated at checkout
                        </div>
                        <Link to='/checkout'><button>Proceed To Checkout</button></Link>
                    </div>
                </div>
                <div className="cart_total">
                    <p>Calculate Shipping</p>
                    <div className="total_box">
                        <span>
                            <input type="text" name="Location" id="" placeholder="Location" />
                        </span>
                        <span>
                        <input type="text" name="Location" id="" placeholder="Quantity" />
                        </span>
                        <span>
                        <input type="text" name="Location" id="" placeholder="Location" />
                        </span>
                        <button>Calculate Shipping</button>
                    </div>
                </div>
            </div>
        
        </div>
        </>
     );
};

const Tr = ({item}) =>{

    const dispatch = useDispatch()
    const deleteProduct = () =>{
        dispatch(cartActions.deleteItem(item.id));
    };
    const itemTotal = item.price * item.quantity;

    return <tr>
    <td>
        <img src={item.image} alt="product" />
    </td>
    <td>${item.price}</td>
    <td>{item.quantity}</td>
    <td>{itemTotal}</td>
    <td onClick={deleteProduct}><FontAwesomeIcon icon={faTrash} /></td>
</tr>
}
 
export default Cart;