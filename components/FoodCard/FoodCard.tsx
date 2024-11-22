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
import { addToCart, getCart, ICartData, ICartItem } from "../../api/cartApi";
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
  const [user, setUser] = useState<null | IUser>(null);
  const [cartData, setCartData] = useState<ICartData[]>([]);

  useMemo(() => {
    getAccount({ setUser: (e) => setUser(e) });

    getCart(({setCartData: (e) => setCartData(e)}))
  }, []);

  const cartItems = useMemo(() => {
    if (!cartData.length && !cartData) return [];

    if(user){
      if(user.$id){

        const findCart = cartData.find((data: ICartItem) => {
          return data.cartItems[id];
        });
        console.log(findCart)
        if (findCart) {
          return findCart.cartItems[id];
        }
    
        return [];
      }
    }

  }, [cartData, user]);

  console.log(cartItems);

  function addItemToCart() {
    // if (user) {
    //   if(user.$id){
    //     const data = {
    //       [user.$id]: [
    //         {
    //           name: foodData.name,
    //           price: foodData.price,
    //           gallery: foodData.gallery,
    //           quantity: 1,
    //         },
    //       ],
    //     };
    
    //     if(cartItems.length){
  
    //       cartItems[user.$id].push(data[user.$id]);
    //       console.log(cartItems)
    //       return;
    //     }
  
    //     addToCart({ cartItems: data });
  
    //     return;
    //   }
    // }

    if(cartItems.length){
      const data = {
            name: foodData.name,
            price: foodData.price,
            gallery: foodData.gallery,
            quantity: 1,
      };

      console.log(cartItems[sessionStorage.getItem("guestId")])
      cartItems[sessionStorage.getItem("guestId") as string].push(data);
      console.log(cartItems)
      return;
    }else{
      // const guestId = guestIdGenerator();

      // const data = {
      //   [guestId]: [
      //     {
      //       name: foodData.name,
      //       price: foodData.price,
      //       gallery: foodData.gallery,
      //       quantity: 1,
      //     },
      //   ],
      // };
  
      // sessionStorage.setItem("guestId", guestId);
  
  
      // addToCart({ cartItems: data });
    }


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
