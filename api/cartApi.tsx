import {databases, ID} from "./appwrite"
import {IFoodData} from "../api/getData"

export async function addToCart({cartItem}:{cartItem: IFoodData}){
    try{
        await databases.createDocument(
            import.meta.env.VITE_DB_ID,
            import.meta.env.VITE_CART_COLLECTION,
            ID.unique(),
            cartItem, // data
        );
    }catch(error){
        throw new Error(`${error}`);
    }
}