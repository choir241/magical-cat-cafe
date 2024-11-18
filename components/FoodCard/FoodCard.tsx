import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { IFoodData } from "api/getData";
import { Button } from "../ui/button";
import { BsPlusCircleFill } from "react-icons/bs";
import { getCart, addToCart, ICartData } from "../../api/cartApi";
import { useState, useMemo } from "react";
import { getAccount, IUser } from "../../api/userApi";
import {guestIdGenerator} from "../FoodCard/guestIdGenerator"

export default function FoodCard({
  foodData,
  className,
}: {
  foodData: IFoodData;
  className?: string;
}) {
  const [user, setUser] = useState<IUser | null>(null);
  const [cartData, setCartData] = useState<ICartData[]>([]);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });

    getCart(({setCartData: (e) => setCartData(e)}))
  }, []);

  const cartItems = useMemo(() => {
    if (!cartData.length) return [];

    const id = user ? user.$id : (sessionStorage.getItem("guestId") as string);
    const findCart = cartData.find((data: ICartData) => {
      return JSON.parse(data.cartItems)[id];
    });

    if (findCart) {
      return JSON.parse(findCart.cartItems)[id];
    }
  }, [cartData, user]);

  function addItemToCart() {
    if (user) {
      const data = {
        [user.$id]: [
          {
            name: foodData.name,
            price: foodData.price,
            gallery: foodData.gallery,
            quantity: 1,
          },
        ],
      };

      if(cartItems.length){

        cartItems[user.$id].push(data[user.$id]);


        console.log(cartItems)

        return;
      }

      addToCart({ cartItems: data });

      return;
    }

    const guestId = guestIdGenerator();

    const data = {
      [guestId]: [
        {
          name: foodData.name,
          price: foodData.price,
          gallery: foodData.gallery,
          quantity: 1,
        },
      ],
    };

    sessionStorage.setItem("guestId", guestId);

    addToCart({ cartItems: data });
  }


  return (
    <Card className={`flex flex-col items-center w-[20rem] ${className}`}>
      <CardHeader>
        <CardTitle>
          {foodData.name} {foodData.price}
        </CardTitle>
        <CardDescription>{foodData.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <img src={`../src/public${foodData.gallery}`} />
      </CardContent>
      <CardFooter>
        <Button
          onClick={(e) => {
            e.preventDefault();
            addItemToCart();
          }}
        >
          <BsPlusCircleFill />
        </Button>
      </CardFooter>
    </Card>
  );
}
