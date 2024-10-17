import "./App.css";
import { useState, useEffect } from "react";
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
import { FormComponent } from "../components/Form";
import {loginAccount, signupAccount} from "../api/userApi"

export default function App() {
  const [catData, setCatData] = useState<ICatData[]>();
  const [foodData, setFoodData] = useState<IFoodCategory>();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");


  useEffect(() => {
    getCatData({ setCatData: (catData: ICatData[]) => setCatData(catData) });
    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });
  }, []);

  return (
    <>
      <FormComponent onSubmit={()=>signupAccount({accountData:{name, email, password}})}/>
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
