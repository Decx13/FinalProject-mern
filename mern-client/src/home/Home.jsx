import React from "react";
import Banner from "../components/Banner";
import BestSellingFurnitures from "./BestSellingFurnitures";
import FavFurniture from "./FavFurniture";

const Home = () => {
    return (
        <div className=''>
           <Banner/>
           <BestSellingFurnitures/>
           <FavFurniture/>
        </div>

    )
}

export default Home