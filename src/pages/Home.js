import React from "react";
import { useState, useEffect } from "react";
import Meta from "../components/Header/Meta/Meta";
import '../styles/Home.css'
import Offers from "../components/offers/Offers";
import Hero from "../sections/Hero";
import Featured from "../sections/Featured";
import items from '../assets/data/data'
import LatestProducts from "../sections/Latest";
import Unique from "../sections/Unique";
import Categories from "../sections/Categories";

const Home = () => {
    const [products, setProducts] = useState(items);
    const [pending, setPending] = useState(true);

    useEffect(()=>{
        const AllItems = items;
        setProducts(AllItems);
        setPending(false);
    }, [])

    if(pending) {
        <div>I dey Load ooo...</div>
    }

    return ( 
        <>
        <Meta title={'Home'} />
        <Hero />
        {Featured && <Featured products={products} />}
        <LatestProducts products={products} />
        <Offers />
        <Unique />
        <Categories products={products} />
        </>
     );
}
 
export default Home;