import '../../sections/Latest.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/slices/sliceCart';
import { Link } from 'react-router-dom';

const ProductList =({item})=>{

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
            <div className='list_item'>
                            <motion.div 
                            whileHover={{background: 'none'}}
                            className="l_img">
                                <img src={item.image} alt="" />
                                <span className='fs'><FontAwesomeIcon icon={faSearch} /></span>
                                <span className='sf' onClick={addToCart}><FontAwesomeIcon icon={faCartPlus} /></span>
                            </motion.div>
                            <div className="latest_info">
                                <Link to={`${item.id}`}><p>{item.title}</p></Link>
                                <p>${item.price}</p>
                            </div>
            </div>
    </>
}

export default ProductList;