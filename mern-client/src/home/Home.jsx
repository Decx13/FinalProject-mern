import React from "react";
import Banner from "../components/Banner";
import BestSellingFurnitures from "./BestSellingFurnitures";
import FavFurniture from "./FavFurniture";
import PromotionArea from "./PromotionArea";
import OtherFurniture from "./OtherFurniture";
import CustomerReviews from "./CustomerReviews";

const Home = () => {
    return (
        <div className=''>
           <Banner/>
           <BestSellingFurnitures/>
           <FavFurniture/>
           <PromotionArea/>
           <OtherFurniture/>
           <CustomerReviews/>
        </div>

    )
}

export default Home