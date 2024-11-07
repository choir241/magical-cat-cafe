import { useState, useEffect } from "react";
import {
    getFoodData,
    IFoodCategory,
    IFoodData,
  } from "../../api/getData";
import FoodCard from "../../components/FoodCard";
import Pagination from "../../components/Pagination";

export default function Menu(){
    const [foodData, setFoodData] = useState<IFoodCategory>();
    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 4;
  
    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;

    useEffect(() => {
        getFoodData({
          setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
        });
      }, []);


    return(
        <>
        {foodData ? (
        <main className="w-full">
              {/* Appetizers Cards */}
              <section className="flex flex-col w-full items-center">
{/* 
              {foodData.appetizers.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })} */}

          </section>

          {/* Main dishes Cards */}
          <section className="flex w-full items-end flex-wrap">

<div className="flex">
          {foodData.mainDishes
            .slice(firstIndex, lastIndex)
            .map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          
          </div>

          </section>
            <Pagination list={foodData.mainDishes} itemsPerPage={itemsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} lastIndex={lastIndex}/>

          {/* Drinks Cards */}
          {/* <section className="flex w-full items-end flex-wrap">
          {foodData.drinks.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          </section> */}

          <section className="flex w-full items-end flex-wrap">
          {/* Desserts Cards */}
          {/* {foodData.desserts.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })} */}
          </section> 

        </main>
        )
        :
        <h1>Loading...</h1>
}
        </>
    )
}
