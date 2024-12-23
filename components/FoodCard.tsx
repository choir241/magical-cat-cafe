import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { IFoodData } from "api/getData";
import { Button } from "./ui/button";
import { BsPlusCircleFill } from "react-icons/bs";
import { addToCart } from "../api/cartApi";
import { useState, useMemo } from "react";
import { getAccount, IUser } from "../api/userApi";

export default function FoodCard({
  foodData,
  className,
}: {
  foodData: IFoodData;
  className?: string;
}) {
  const [user, setUser] = useState<IUser | null>(null);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  function guestIdGenerator() {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    let guestId = "";

    for (let i = 0; i < 20; i++) {
      const coinFlip = Math.floor(Math.random() * 2);
      const randomNum = Math.floor(Math.random() * 10);
      const randomLetter = Math.floor(Math.random() * alphabet.length);

      if (!coinFlip) {
        guestId += randomNum.toString();
      } else {
        guestId += alphabet[randomLetter];
      }
    }

    return guestId;
  }

  function addItemToCart() {
    if (user) {
      const data = {
        [user.$id]: [{
          name: foodData.name,
          price: foodData.price,
          gallery: foodData.gallery,
          quantity: 0
        }],
      };

      addToCart({ cartItems: data });

      return;
    }

    const guestId = guestIdGenerator();

    const data = {
      [guestId]: [{
        name: foodData.name,
        price: foodData.price,
        gallery: foodData.gallery,
        quantity: 0
      }],
    };

    sessionStorage.setItem("guestId", guestId);

    addToCart({ cartItems: data });
  }


  return (
    <Card className={`flex flex-col items-center w-[20rem] bg-[#1B1D2E] ${className}`}>
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