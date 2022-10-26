import React,{useState} from "react";

import items from '../assets/data/data'
import Meta from "../components/Header/Meta/Meta";
import '../styles/Shop.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PageHead from "../components/Layout/PageHead";
import ProductList from "../components/Layout/ProductList";

const Shop = () => {
    const [itemsData, setItemsData] = useState(items);

    const setFilter = (e)=>{
        const filterValue = e.target.value;
        if(filterValue === "sofa"){
            const filteredItems = items.filter(
                (item) => item.category === "sofa"
            );

            setItemsData(filteredItems);
        }
        if(filterValue === "chair"){
            const filteredItems = items.filter(
                item => item.category === 'chair'
            );

            setItemsData(filteredItems)
        }
        if(filterValue === "couch"){
            const filteredItems = items.filter(
                item => item.category === 'couch'
            );

            setItemsData(filteredItems)
        }
        if(filterValue === "all"){
            const filteredItems = items.filter(
                item => item.category !== ''
            );

            setItemsData(filteredItems)
        }
    }
    const setSearch = (e)=>{
        const searchItem = e.target.value

        const searchedValue = items.filter(item=>
            item.title.toLowerCase().includes(searchItem.toLowerCase()))

            setItemsData(searchedValue)
    }
    return ( 
        <>
            <Meta title={'Products'} />
            <PageHead title='Products' page='Shop' />
            <section className="shop container">
                <div className="shop_bar">
                    <div className="shop_widget">
                        <h3>All Our Products</h3>
                    </div>
                    <div className="shop_widget">
                        <div className="filter_widget">
                            <p>Filtered by:</p>
                            <select name="" id="" onChange={setFilter}>
                                <option>Filter By Category</option>
                                <option value="all">All</option>
                                <option value="sofa">Sofa</option>
                                <option value="couch">Couch</option>
                                <option value="chair">Chair</option>
                            </select>
                        </div>
                        <div className="filter_widget">
                        <p>Sort by:</p>
                            <select name="" id="">
                                <option>Sort By</option>
                                <option value="ascend">Ascending</option>
                                <option value="descend">Descending</option>
                                {/* <option value="chair">Chair</option> */}
                            </select>
                        </div>
                        <div className="search_widget">
                            <input type="text" placeholder='search item' onChange={setSearch} />
                            <span><FontAwesomeIcon icon={faSearch} color='rgba(0, 0, 0, 0.808)' /></span>
                        </div>
                    </div>
                </div>
                <div className="items_list">
                {
                    itemsData.length === 0 ? <h1>No Product Found</h1> : 
                    itemsData.map((item, index)=>(
                        <ProductList key={index} item={item} />
                    ))
                }
                </div>

            </section>
        </>
     );
}
 
export default Shop;