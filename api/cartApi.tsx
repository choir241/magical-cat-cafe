import { database} from "../api/firebase";
import { getDatabase, ref, set } from "firebase/database";
import { getDocs, collection } from 'firebase/firestore/lite';
import { QueryDocumentSnapshot, DocumentData } from "firebase/firestore/lite";

export interface ICartDB {
  name: string;
  price: number;
  gallery: string;
  quantity: number;
}

export interface ICartItem {
  [x: string]: ICartDB[];
}

export interface ICartData {
  cartItems: string;
  $collectionId?: string;
  $createdAt?: string;
  $databaseId?: string;
  $id?: string;
  $permissions?: string;
  $updatedAt?: string;
}

export async function addToCart() {
  try {
    const db = getDatabase();
    set(ref(db, 'users/'), {
      name: "su-metal"
    });

    window.location.reload();
  } catch (error) {
    throw new Error(`There was an error adding to your cart, ${error}`);
  }
}

export async function editCart({
  cartItems,
  cartId,
}: {
  cartItems: ICartItem;
  cartId: string;
}) {
  try {
    console.log(cartItems);
    console.log(cartId);
  } catch (error) {
    throw new Error(`There was an error editing your cart, ${error}`);
  }
}

export async function deleteCart({ cartId }: { cartId: string }) {
  try {
  console.log(cartId);
  } catch (error) {
    throw new Error(`Error deleting your cart, ${error}`);
  }
}

export async function getCart(
  {
  setCartData,
}: {
  setCartData: (e: QueryDocumentSnapshot<DocumentData, DocumentData>[]) => void;
}
) {
  try {
    const userCollection = collection(database, "users");
    const data = await getDocs(userCollection);
    setCartData(data.docs);
  } catch (error) {
    throw new Error(`Error getting your cart, ${error}`);
  }
}