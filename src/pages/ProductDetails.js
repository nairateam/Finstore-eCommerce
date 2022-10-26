import React, { useState } from "react";
import items from "../assets/data/data";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import '../styles/ProductDetails.css'
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/sliceCart';
import PageHead from "../components/Layout/PageHead";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    const [subNav, setSubNav] = useState('desc');
    const product = items.find((item)=> item.id === id);
    const relatedStuff = items.filter((item)=> item.category === 'couch');

    const { title, category, image, price, desc, description } = product;
    const dispatch = useDispatch()

    const addToCart =()=>{
        dispatch(cartActions.addItem({
            id: id,
            title: title,
            price: price,
            image: image,

        }));

        toast.success('Product added to cart');
    };

    return ( 
        <>
        <PageHead title={title} page={title} />
        <div className="product_details">
            <div className="inner_detail">
                <div className="image_box">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="inner_detail">
                <h3>{title}</h3>
                <div className="reviews">****</div>
                <p className="price_p">${price} <span>$300</span></p>
                <p>Color: </p>
                <p>{desc}</p>
                <div className="cart_add">
                    <button onClick={addToCart}>Add To Cart</button>
                </div>
                <div className="cat"><h5>Category:</h5><p>{category}</p></div>
            </div>
        </div>
        <div className="sub_details">
            <div className="sub_nav">
                <h5 onClick={()=> setSubNav("desc")}
                className={`${subNav==='desc' ? 'active_nav' : ''}`}>Description</h5>
                <h5 onClick={()=> setSubNav("rev")}
                className={`${subNav==='rev' ? 'active_nav' : ''}`}>Reviews</h5>
            </div>
            <div className="sub_info">
                {
                    subNav==="desc" ? <div className="sub_info_top">
                    <h4>{title}:</h4>
                    <p>{description}</p>
                </div> : <div className="sub_info_top">
                    <p>Ratings: *****</p>
                    <div className="comment_box">
                        <form action="">
                            <div className="form_wrap">
                                <label htmlFor="">Name:</label>
                                <input type="name" />
                            </div>
                            <div className="form_wrap">
                                <label htmlFor="">Comment:</label>
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                }
            </div>
        </div>
        <div className="related_items container">
            <h2>Related Products:</h2>
            <div className="related_wrap">
            {
                relatedStuff.slice(0, 4).map((item, index) => {
                   return <>
                        <div className="featured__container">
                            <div className="top_featured">
                                <motion.img 
                                whileHover={{scale: 1.1}}
                                src={item.image} alt="" />
                            </div>
                            <Link to={`shop/${item.id}`}>
                                <div className="bottom_featured">
                                    <h4>{item.title}</h4>
                                    <p>${item.price}</p>
                                </div>
                            </Link>
                        </div>
                   </>
                })
            }
            </div>
        </div>
        </>
     );
}
 
export default ProductDetails;