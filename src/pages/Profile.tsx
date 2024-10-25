import { useState, useEffect } from "react";
import {
  getCatData,
  ICatData,
  getFoodData,
  IFoodCategory,
  IFoodData,
} from "../../api/getData";
import CatCard from "../../components/CatCard";
import FoodCard from "../../components/FoodCard";
import { Button } from "../../components/ui/button";

export default function Profile() {
  const [catData, setCatData] = useState<ICatData[]>();
  const [foodData, setFoodData] = useState<IFoodCategory>();

  useEffect(() => {
    getCatData({ setCatData: (catData: ICatData[]) => setCatData(catData) });
    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });
  }, []);

  return (
    <>
      {catData && foodData ? (
        <main>
          {/* Cat Cards */}
          {/* <section>
          {catData.map((cat: ICatData, i: number) => {
            return (
              <div key={`${cat.breed}-${i}`}>
                <CatCard catData={cat} />
              </div>
            );
          })}
          </section> */}

          {/* Appetizers Cards */}
          {/* <section>
          {foodData.appetizers.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          </section> */}

          {/* Main dishes Cards */}
          {/* <section>
          {foodData.mainDishes.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          </section> */}

          {/* Drinks Cards */}
          {/* <section>
          {foodData.drinks.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          </section>  */}

          {/* Desserts Cards */}
          {/* <section>
          {foodData.desserts.map((food: IFoodData, i: number) => {
            return (
              <div key={`${food}-${i}`}>
                <FoodCard foodData={food} />
              </div>
            );
          })}
          </section>  */}
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
