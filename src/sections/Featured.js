import '../styles/Home.css'
// import productImage from '../assets/product/pr.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/sliceCart';

const Featured = ({products}) => {

    return ( 
        <section className="featured container">
            <h2 className='titled'>Featured Products</h2>
            <div className="featured__products">
                <>
                        {products.map((item, index)=>(
                            <FeaturedProduct key={index} item={item} />
                        ))}
                </>

            </div>
        </section>
     );
}

const FeaturedProduct =({item})=>{

    const dispatch = useDispatch()

    const addToCart =()=>{
        dispatch(cartActions.addItem({
            id: item.id,
            title: item.title,
            price: item.price,
            image: item.image

        }));

        toast.success('Product added to cart');
    };

    return <>
        <div className="featured__container">
            <div className="top_featured">
                <motion.img 
                whileHover={{scale: 1.1}}
                src={item.image} alt="" />
                <motion.span
                whileTap={{scale: 1.5}}
                className='minus_span'
                ><FontAwesomeIcon icon={faMinus} /></motion.span>
                <motion.span
                whileTap={{scale: 1.5}}
                className='plus_span'
                onClick={addToCart}
            ><FontAwesomeIcon icon={faPlus} /></motion.span>
            </div>
            <Link to={`shop/${item.id}`}>
                <div className="bottom_featured">
                    <h4>{item.title}</h4>
                    <p>${item.price}</p>
                </div>
            </Link>
        </div>
    </>
}
 
export default Featured;