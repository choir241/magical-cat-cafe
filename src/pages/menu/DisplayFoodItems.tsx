import { useState } from "react";
import { IFoodCategory, IFoodData } from "../../../api/getData";
import FoodCard from "../../../components/FoodCard";
import Pagination from "../../../components/Pagination";

export function DisplayFoodItems({items, foodData}:{items: IFoodData[], foodData: IFoodCategory | null}){

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;

    const firstIndex = (currentPage - 1) * itemsPerPage;
    const lastIndex = firstIndex + itemsPerPage;
  
    const paginatedItems = items.slice(firstIndex, lastIndex);
    const evenItems = paginatedItems.filter((_, i) => i % 2 === 0);
    const oddItems = paginatedItems.filter((_, i) => i % 2 !== 0);

    return (
      <section className="w-full flex justify-between items-center flex-col mt-10">
        <div className="flex items-end mb-20 justify-evenly w-full">
          {evenItems.map((food, i)=> (
            <div key={`${food}-${i}`}>
            <FoodCard foodData={food} />
          </div>
          ))}
        </div>

        <div className="flex items-end mb-20 justify-evenly w-full">
          {oddItems.map((food, i)=> (
            <div key={`${food}-${i}`}>
            <FoodCard foodData={food} />
          </div>
          ))}
        </div>

        {items === foodData?.mainDishes && (
          <Pagination
            list={items}
            itemsPerPage={itemsPerPage}
            setCurrentPage={setCurrentPage}
          />
        )}
      </section>
    );
}