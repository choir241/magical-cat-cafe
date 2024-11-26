import { ICartData } from "api/cartApi";
import {IUser} from "api/userApi";
import { useMemo } from "react";

export function FindCartItems({cartData, user}:{cartData: ICartData[], user: IUser | null}){
    return useMemo(()=>{
        if (!cartData.length) return [];

        const id = user ? user.$id : (sessionStorage.getItem("guestId") as string);
        const findCart = cartData.find((data: ICartData) => {
          return JSON.parse(data.cartItems)[id];
        });
    
        if (findCart) {
          return JSON.parse(findCart.cartItems)[id];
        }
    },[cartData, user]);    
}