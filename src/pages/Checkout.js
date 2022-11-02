import Meta from '../components/Header/Meta/Meta';
import PageHead from '../components/Layout/PageHead';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../styles/Checkout.css';

const Checkout = () => {

    const totalQty = useSelector(state=> state.cart.totalQuantity)
    const totalAmount = useSelector(state=> state.cart.totalAmount)

    return ( 
        <>
        <Meta title='Checkout' />
        <PageHead title='Checkout' page='Checkout' />
        <div className="container checkout">
            <div className="inner_checkout">
                <div className="top_form">
                    <h3>Checkout</h3>
                </div>
                <div className="form_container">
                    <form action="">
                        <div className="form_flex">
                            <h3>Contact Information</h3>
                            <p>Already have an account? Login</p>
                        </div>
                        <input type="text" placeholder="Email or phone number" />
                        <div className="checkbox">
                            <input type="checkbox" name="" id="checkboxt" /> Keep me up to date on news and excluive offers
                        </div>
                        <div className="form_flex">
                            <h3>Shipping Address</h3>
                        </div>
                        <div className="form_flex">
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        </div>
                        <div className="form_flex">
                        <input type="text" placeholder="Address" />
                        </div>
                        <div className="form_flex">
                        <input type="text" placeholder="Email or phone number" />
                        </div>
                        <div className="form_flex">
                        <input type="text" placeholder="City" />
                        </div>
                        <div className="form_flex">
                        <input type="text" placeholder="State" />
                        <input type="text" placeholder="Postal Code" />
                        </div>
                        <button>Continue</button>
                    </form>
                </div>
            </div>
            <div className="inner_checkout">
                <div className="cart_total">
                    <p>Cart Totals</p>
                    <div className="total_box">
                        <span>
                            <p>Total Qty:</p>
                            <p>{totalQty}</p>
                        </span>
                        <span>
                            <p>Subtotals:</p>
                            <p>$300</p>
                        </span>
                        <span>
                            <p>Totals:</p>
                            <p>${totalAmount}</p>
                        </span>
                        <div className="checkbox">
                            <input type="checkbox" name="" id="" /> Shipping & taxes calculated at checkout
                        </div>
                        <Link to='/completed'><button>Proceed To Checkout</button></Link>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Checkout;