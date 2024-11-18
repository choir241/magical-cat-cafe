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
    console.log(cartItems);
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

export async function getCart({
  setCartData,
}: {
  setCartData: (e: ICartData[]) => void;
}) {
  try {
    setCartData([]);
  } catch (error) {
    throw new Error(`Error getting your cart, ${error}`);
  }
}