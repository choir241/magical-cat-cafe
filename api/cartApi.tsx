import { databases, ID } from "./appwrite";

interface ICartData {
  cart: string[];
}

export async function addToCart({ cartItems }: { cartItems: ICartData }) {
  try {
    await databases.createDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      ID.unique(),
      cartItems,
    );
  } catch (error) {
    throw new Error(`There was an error adding to your cart, ${error}`);
  }
}

export async function editCart({
  cartItems,
  cartId,
}: {
  cartItems: ICartData;
  cartId: string;
}) {
  try {
    await databases.updateDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      cartId,
      cartItems,
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
