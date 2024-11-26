import CartItem from "../../components/CartItem";
import { useState, useEffect } from "react";
import { getCart, ICartData, ICartDB } from "../../api/cartApi";
import { IUser, getAccount } from "../../api/userApi";
import Nav from "../../components/Nav";
import { FindCartItems } from "./menu/FindCartItems";

export default function Cart() {
  const [cartData, setCartData] = useState<ICartData[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [usersCart, setUsersCart] = useState<ICartDB[]>([]);

  const cartItems = FindCartItems({cartData, user});

  useEffect(() => {
    setUsersCart(cartItems);
  }, [cartItems]);

  useEffect(() => {
    getCart({
      setCartData: (cartData: ICartData[]) => setCartData(cartData),
    });

    getAccount({ setUser: (e) => setUser(e) });
  }, []);

  return (
    <main className="bg-[#383151] min-h-screen">
      <Nav numOfCartItems={usersCart ? usersCart.length : 0}/>

      <CartItem cartItem={usersCart} />
      </main>
  );
}
