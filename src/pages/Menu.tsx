import { useState, useEffect, useMemo } from "react";
import { getFoodData, IFoodCategory, IFoodData } from "../../api/getData";
import FoodCard from "../../components/FoodCard";
import Pagination from "../../components/Pagination";
import { Button } from "../../components/ui/button";
import Nav from "../../components/Nav";
import { getCart, ICartData, ICartItem } from "../../api/cartApi";
import { IUser, getAccount } from "../../api/userApi";

export default function Menu() {
  const [foodData, setFoodData] = useState<IFoodCategory | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("appetizers");
  const [cartData, setCartData] = useState<ICartData[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [usersCart, setUsersCart] = useState<ICartItem[] | null>(null);

  const itemsPerPage = 6;

  const firstIndex = (currentPage - 1) * itemsPerPage;
  const lastIndex = firstIndex + itemsPerPage;

  const cartItems = useMemo(() => {
    if (!cartData.length) return [];

    const id = user ? user.$id : (sessionStorage.getItem("guestId") as string);
    const findCart = cartData.find((data: ICartData) => {
      return JSON.parse(data.cartItems)[id];
    });

    return findCart ? JSON.parse(findCart.cartItems)[id] : {};
  }, [cartData, user]);

  useEffect(() => {
    setUsersCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    getCart({
      setCartData: (cartData: ICartData[]) => setCartData(cartData),
    });

    getAccount({ setUser: (e) => setUser(e) });

    getFoodData({
      setFoodData: (foodData: IFoodCategory) => setFoodData(foodData),
    });
  }, []);

  return (
    <>
      {foodData && usersCart ? (
        <main className="w-full">
          <Nav numOfCartItems={usersCart.length} />

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
