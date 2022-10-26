import ubanner from '../assets/hero/Groupf.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDotCircle } from '@fortawesome/free-solid-svg-icons';
import './Unique.css'

const Unique = () => {
    return ( 
        <div className="unique">
            <div className="unique_item">
                <img src={ubanner} alt="" />
            </div>
            <div className="unique_item">
                <h4>Unique Features Of Latest &
                Trending Poducts</h4>
                <p><FontAwesomeIcon icon={faDotCircle} style={{color: '#F52B70', fontSize: '0.8rem'}} /> All frames constructed with hardwood solids and laminates</p>
                <p><FontAwesomeIcon icon={faDotCircle} style={{color: '#2B2BF5', fontSize: '0.8rem'}} /> Reinforced with double wood dowels, glue, screw - nails corner 
blocks and machine nails</p>
                <p><FontAwesomeIcon icon={faDotCircle} style={{color: '#2BF5CC', fontSize: '0.8rem'}} /> Arms, backs and seats are structurally reinforced</p>
                <button>Shop Now</button>
            </div>
        </div>
     );
}
 
export default Unique;