import { useState, useEffect } from "react";
import { getFoodData, IFoodCategory, IFoodData } from "../../api/getData";
import FoodCard from "../../components/FoodCard";
import Pagination from "../../components/Pagination";
import { Button } from "../../components/ui/button";
import Nav from "../../components/Nav";

export default function Menu() {
  const [foodData, setFoodData] = useState<IFoodCategory>();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("appetizers");

  const itemsPerPage = 6;

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;

  useEffect(() => {
    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });
  }, []);

  return (
    <>
      {foodData ? (
        <main className="w-full">
          <Nav/>

          <section className="flex justify-center items-center mt-8">
            <Button className="mr-10" onClick={() => setCategory("appetizers")}>
              Appetizers
            </Button>
            <Button className="mr-10" onClick={() => setCategory("main")}>
              Main Dishes
            </Button>
            <Button className="mr-10" onClick={() => setCategory("drinks")}>
              Drinks
            </Button>
            <Button onClick={() => setCategory("desserts")}>Desserts</Button>
          </section>

          {category === "appetizers" ? (
            <section className="w-full flex justify-between items-center flex-col mt-10">
              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.appetizers
                  .slice(firstIndex, lastIndex)
                  .map((food: IFoodData, i: number) => {
                    if (i % 2 === 0) {
                      return (
                        <div key={`${food}-${i}`}>
                          <FoodCard foodData={food} />
                        </div>
                      );
                    }
                  })}
              </div>

              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.appetizers
                  .slice(firstIndex, lastIndex)
                  .map((food: IFoodData, i: number) => {
                    if (i % 2 !== 0) {
                      return (
                        <div key={`${food}-${i}`}>
                          <FoodCard foodData={food} />
                        </div>
                      );
                    }
                  })}
              </div>
            </section>
          ) : (
            ""
          )}

          {category === "main" ? (
            <section className="w-full flex justify-between items-center flex-col mt-10">
              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.mainDishes
                  .slice(firstIndex, lastIndex)
                  .map((food: IFoodData, i: number) => {
                    if (i % 2 === 0) {
                      return (
                        <div key={`${food}-${i}`}>
                          <FoodCard foodData={food} className="" />
                        </div>
                      );
                    }
                  })}
              </div>

              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.mainDishes
                  .slice(firstIndex, lastIndex)
                  .map((food: IFoodData, i: number) => {
                    if (i % 2 !== 0) {
                      return (
                        <div key={`${food}-${i}`}>
                          <FoodCard foodData={food} />
                        </div>
                      );
                    }
                  })}
              </div>

              <Pagination
                list={foodData.mainDishes}
                itemsPerPage={itemsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </section>
          ) : (
            ""
          )}

          {category === "drinks" ? (
            <section className="w-full flex justify-between items-center flex-col mt-10">
              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.drinks.map((food: IFoodData, i: number) => {
                  if (i % 2 === 0) {
                    return (
                      <div key={`${food}-${i}`}>
                        <FoodCard foodData={food} />
                      </div>
                    );
                  }
                })}
              </div>

              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.drinks.map((food: IFoodData, i: number) => {
                  if (i % 2 !== 0) {
                    return (
                      <div key={`${food}-${i}`}>
                        <FoodCard foodData={food} />
                      </div>
                    );
                  }
                })}
              </div>
            </section>
          ) : (
            ""
          )}

          {category === "desserts" ? (
            <section className="w-full flex justify-between items-center flex-col mt-10">
              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.desserts.map((food: IFoodData, i: number) => {
                  if (i % 2 === 0) {
                    return (
                      <div key={`${food}-${i}`}>
                        <FoodCard foodData={food} />
                      </div>
                    );
                  }
                })}
              </div>

              <div className="flex items-end mb-20 justify-evenly w-full">
                {foodData.desserts.map((food: IFoodData, i: number) => {
                  if (i % 2 !== 0) {
                    return (
                      <div key={`${food}-${i}`}>
                        <FoodCard foodData={food} />
                      </div>
                    );
                  }
                })}
              </div>
            </section>
          ) : (
            ""
          )}
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
