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
<<<<<<< Updated upstream:components/FoodCard.tsx
import { addToCart } from "../api/cartApi";
=======
import { getCart, addToCart, ICartData } from "../../api/cartApi";
>>>>>>> Stashed changes:components/FoodCard/FoodCard.tsx
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

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });

    getCart(({setCartData: (e) => setCartData(e)}))
  }, []);

<<<<<<< Updated upstream:components/FoodCard.tsx
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
=======
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
>>>>>>> Stashed changes:components/FoodCard/FoodCard.tsx

  function addItemToCart() {
    if (user) {
      const data = {
        [user.$id]: {
          name: foodData.name,
          price: foodData.price,
          gallery: foodData.gallery,
          quantity: 0
        },
      };

<<<<<<< Updated upstream:components/FoodCard.tsx
=======
      if(cartItems.length){

        cartItems[user.$id].push(data[user.$id]);


        console.log(cartItems)

        return;
      }

>>>>>>> Stashed changes:components/FoodCard/FoodCard.tsx
      addToCart({ cartItems: data });

      return;
    }

    const guestId = guestIdGenerator();

    const data = {
<<<<<<< Updated upstream:components/FoodCard.tsx
      [guestId]: {
        name: foodData.name,
        price: foodData.price,
        gallery: foodData.gallery,
        quantity: 0
      },
    };

=======
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

>>>>>>> Stashed changes:components/FoodCard/FoodCard.tsx
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
