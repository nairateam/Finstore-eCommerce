import './Footer.css'

const Footer = () => {
    return ( 
        <>
        <div className="footer">
            <div className="footer_top">
                <div className="top_item">
                    <h3>Finstore</h3>
                    <input type="email" name="" id="" placeholder='Enter Email' />
                    <h5>Contact Info:</h5>
                    <p>info@finstore.com<br/>
                    Lagos, Nigeria.</p>
                </div>
                <div className="top_item">
                    <h3>Categories</h3>
                    <p>Chair</p>
                    <p>Sofa</p>
                    <p>Couch</p>
                </div>
                <div className="top_item">
                    <h3>Customer Care</h3>
                    <p>Return Policy</p>
                    <p>Order Tracking</p>
                    <p>Discount</p>
                </div>
                <div className="top_item">
                    <h3>Pages</h3>
                    <p>Category</p>
                    <p>Browse Shop</p>
                    <p>Blog</p>
                </div>
            </div>
            <div className="footer_bottom">
                <p>©Finstore - All Rights Reserved | developed by <span>Femi.dev</span></p>
            </div>
        </div>
        </>
     );
}
 
export default Footer;