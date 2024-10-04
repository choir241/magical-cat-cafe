import "./App.css";
import { useState, useMemo } from "react";
import {
  getCatData,
  ICatData,
  getFoodData,
  IFoodCategory,
  IFoodData,
} from "../api/getData";
import CatCard from "../components/CatCard";
import FoodCard from "../components/FoodCard";
import { Button } from "../components/ui/button";

export default function App() {
  const [catData, setCatData] = useState<ICatData[]>();
  const [foodData, setFoodData] = useState<IFoodCategory>();

  useMemo(() => {
    getCatData({ setCatData: (catData: ICatData[]) => setCatData(catData) });
    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });
  }, []);

  console.log(import.meta.env.VITE_PROJECT_ID)

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

          <Button variant="outline">Button</Button>
        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}
