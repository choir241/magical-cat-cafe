import { useState, useEffect } from "react";
import { getFoodData, IFoodCategory, IFoodData } from "../api/getData";
import FoodCard from "../components/FoodCard";
import Pagination from "../components/Pagination";
import { Button } from "../components/ui/button";
import Nav from "../components/Nav";
import { getCart, ICartData, ICartDB } from "../api/cartApi";
import { IUser, getAccount } from "../api/userApi";
import { FindCartItems } from "./pages/menu/FindCartItems";
import { DisplayFoodItems } from "./pages/menu/DisplayFoodItems";

export default function Menu() {
  const [foodData, setFoodData] = useState<IFoodCategory | null>(null);
  const [category, setCategory] = useState("appetizers");
  const [cartData, setCartData] = useState<ICartData[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [usersCart, setUsersCart] = useState<ICartDB[]>([]);

  const cartItems = FindCartItems({cartData, user});

  useEffect(() => {
    setUsersCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });

    getAccount({ setUser: (e) => setUser(e) });

    getCart({
      setCartData: (cartData: ICartData[]) => setCartData(cartData),
    });
  }, []);

  return (
    <div className="bg-[#383151] min-h-screen">
      {foodData ? (
        <main className="w-full">
          <Nav numOfCartItems={usersCart ? usersCart.length : 0} />

          <section className="flex justify-center items-center mt-8">
            <Button
              className="text-[#DFC3AB] bg-[#2F1711] mr-10"
              onClick={() => setCategory("appetizers")}
            >
              Appetizers
            </Button>
            <Button
              className="text-[#DFC3AB] bg-[#2F1711] mr-10"
              onClick={() => setCategory("main")}
            >
              Main Dishes
            </Button>
            <Button
              className="text-[#DFC3AB] bg-[#2F1711] mr-10"
              onClick={() => setCategory("drinks")}
            >
              Drinks
            </Button>
            <Button
              className="text-[#DFC3AB] bg-[#2F1711]"
              onClick={() => setCategory("desserts")}
            >
              Desserts
            </Button>
          </section>

          {category === "appetizers" && DisplayFoodItems({items: foodData.appetizers, foodData: foodData})}
          {category === "main" && DisplayFoodItems({items: foodData.mainDishes, foodData: foodData})}
          {category === "drinks" && DisplayFoodItems({items: foodData.drinks, foodData: foodData})}
          {category === "desserts" && DisplayFoodItems({items: foodData.desserts, foodData: foodData})}

        </main>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}
