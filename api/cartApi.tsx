import { databases, ID } from "./appwrite";

interface ICartDB {
  name: string;
  price: number;
  gallery: string;
}

interface ICartItem {
  [x: string]: ICartDB[];
}

export async function addToCart({ cartItems }: { cartItems: ICartItem }) {
  try {
    await databases.createDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      ID.unique(),
      { cartItems: JSON.stringify(cartItems) },
    );
  } catch (error) {
    throw new Error(`There was an error adding to your cart, ${error}`);
  }
}

export async function editCart({
  cartItems,
  cartId,
}: {
  cartItems: string;
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

export async function deleteCart({ cartId }: { cartId: string }) {
  try {
    await databases.deleteDocument(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
      cartId,
    );
  } catch (error) {
    throw new Error(`Error deleting your cart, ${error}`);
  }
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

export async function getCart({
  setCartData,
}: {
  setCartData: (e: ICartData[]) => void;
}) {
  try {
    const { documents } = await databases.listDocuments(
      import.meta.env.VITE_DB_ID,
      import.meta.env.VITE_CART_COLLECTION,
    );

    setCartData(documents as unknown as ICartData[]);
  } catch (error) {
    throw new Error(`Error getting your cart, ${error}`);
  }
}
