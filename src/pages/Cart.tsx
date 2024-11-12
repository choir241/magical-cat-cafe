import CartItem from "../../components/CartItem";
import { useState, useMemo, useEffect } from "react";
import { getCart, ICartData, ICartDB } from "../../api/cartApi";
import { IUser, getAccount } from "../../api/userApi";
import Nav from "../../components/Nav";

export default function Cart() {
  const [cartData, setCartData] = useState<ICartData[]>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [usersCart, setUsersCart] = useState<ICartDB[]>([]);

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
    <>
      <main>
      <Nav />

      <CartItem cartItem={usersCart} />
      </main>
    </>
  );
}
