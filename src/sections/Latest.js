import './Latest.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/slices/sliceCart';

const LatestProducts = ({products}) => {

    // const dispatch = useDispatch()

    // const addToCart =()=>{
    //     dispatch(cartActions.addItem({
    //         id: products.item.id,
    //         title: products.item.title,
    //         price: products.item.price,
    //         image: products.item.image

    //     }));

    //     alert('Product Added');
    // };

    const filterLatest = () => {
        if(switchP.name === "Best Seller"){
            alert('Hello There!');
        }
        alert('Jagaban')
    }

    

    const switchP = [
        {
            name: "New Arrival"
        },
        {
            name: "Best Seller"
        },
        {
            name: "Special Offer"
        }
    ]

    return ( 
        <>
        <div className="container latest">
            <h2 className="titled">Latest Products</h2>
            <div className="switch_latest">
                {
                    switchP.map((item, index)=>(
                        <button key={index} className='' onClick={filterLatest}> {item.name} </button>
                    ))
                }
            </div>
            <div className="latest_items">
                {
                    products.slice(0, 6).map((item, index)=>(
                        <LatestP key={index} item={item} />
                    ))
                }
            </div>
        </div>
        </>
     );
}

const LatestP =({item})=>{

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
            <div className='latest_wrap'>
                            <motion.div 
                            whileHover={{background: 'none'}}
                            className="latest_img">
                                <img src={item.image} alt="" />
                                <span className='fs'><FontAwesomeIcon icon={faSearch} /></span>
                                <span className='sf' onClick={addToCart}><FontAwesomeIcon icon={faCartPlus} /></span>
                            </motion.div>
                            <div className="latest_info">
                                <p>{item.title}</p>
                                <p>${item.price}</p>
                            </div>
            </div>
    </>
}
 
export default LatestProducts;