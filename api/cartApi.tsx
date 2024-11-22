import { database} from "./firebase";
import { doc, getDocs, collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore/lite';

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

export async function addToCart({ cartItems }: { cartItems: ICartItem }) {
  try {
    
    const cartsCollection = collection(database, "cart");

    await addDoc(cartsCollection, {
      cartItems
    })

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
    const cartsCollection = doc(database, "cart", cartId);

    await updateDoc(cartsCollection, {
      cartItems
    });
  } catch (error) {
    throw new Error(`There was an error editing your cart, ${error}`);
  }
}

export async function deleteCart({ cartId }: { cartId: string }) {
  try {
    await deleteDoc(doc(database, "cart", cartId));
  } catch (error) {
    throw new Error(`Error deleting your cart, ${error}`);
  }
}

export async function getCart(
  {setCartData}:{setCartData: (e:ICartData[])=>void}
) {
  try {
    const userCollection = collection(database, "cart");
    const data = await getDocs(userCollection);
    const obj:any[] = [];
    data.forEach((doc)=>{
      obj.push(doc.data());
    })

    setCartData(obj);
  } catch (error) {
    throw new Error(`Error getting your cart, ${error}`);
  }
}