import { databases, ID } from "./appwrite";
import { IFoodData } from "../api/getData";

export async function addToCart({ cartItem }: { cartItem: IFoodData }) {
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
  cartItem: IFoodData;
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
