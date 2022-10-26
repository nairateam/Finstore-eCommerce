import './Offer.css'
import delivery from '../../assets/icons/delivery.svg'
import cashback from '../../assets/icons/cashback.svg'
import support from '../../assets/icons/support.svg'
import quality from '../../assets/icons/quality.svg'

const Offer = [
    {
        icon: delivery,
        title: 'Free Delivery',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: cashback,
        title: 'Cashback',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: quality,
        title: 'Premium Quality',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    },
    {
        icon: support,
        title: '24/7 Support',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
    }
]

const Offers = () => {
    return ( 
        <section className="offers">
            <h2>What Finstore Offers!</h2>
            <div className="offers__item">
                {
                    Offer.map((offer, index) => (
                        <div key={index} className="single__offer">
                        <img src={offer.icon} alt="Offer" />
                        <h3>{offer.title}</h3>
                        <p>{offer.content}</p>
                        </div>
                    ))
                }
                
            </div>
        </section>
     );
}
 
export default Offers;