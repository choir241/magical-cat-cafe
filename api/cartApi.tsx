import { databases, ID } from "./appwrite";
import { IFoodData } from "../api/getData";

interface ICartData extends IFoodData {
  userId: string;
}

export async function addToCart({ cartItem }: { cartItem: ICartData }) {
  try {
    await databases.createDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      ID.unique(),
      cartItem,
    );
  } catch (error) {
    throw new Error(`There was an error adding to your cart, ${error}`);
  }
}

export async function editCart({
  cartItem,
  cartId,
}: {
  cartItem: ICartData;
  cartId: string;
}) {
  try {
    await databases.updateDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      cartId,
      cartItem,
    );
  } catch (error) {
    throw new Error(`There was an error editing your cart, ${error}`);
  }
}

export async function DeleteCart({ cartId }: { cartId: string }) {
  try {
    await databases.deleteDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      cartId,
    );
  } catch (error) {
    throw new Error(`${error}`);
  }
}
