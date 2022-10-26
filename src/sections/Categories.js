import './Categories.css'

const Categories = ({products}) => {
    // const cat = products.category
    
    return ( 
        <div className="categories container">
            <h2 className="titled">Top categories</h2>
            <div className="cat_wrapper">
                {
                    products.slice(0, 4).map((item, index)=>(
                        <div key={index} className='single_cat'>
                        <div className="cat_top">
                            <img src={item.image} alt="" />
                        </div>
                        <div className="cat_bottom">
                            <p>{item.category}</p>
                        </div>
                        </div>

                    ))
                }
            </div>
        </div>
     );
}
 
export default Categories;