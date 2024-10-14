import AppExpress from "@itznotabug/appexpress";
const router = new AppExpress.Router();
import { databases, ID } from "../appwrite.js";
const addToCart = async (request, response) => {
    try{
        // const cartItem = {
        //     name: request.body.name,
        //     description: request.body.description,
        //     price: request.body.price,
        //     gallery: request.body.gallery
        // };

        const cartItem = {
            name: "test",
            description: "miku",
            price: 10.00,
            gallery: "vtuber"
        };
    
        const data = await databases.createDocument(
            process.env.VITE_DB_ID,
            process.env.VITE_CART_COLLECTION,
            ID.unique(),
            cartItem,
        );
    
        response.json({ data });
    }catch(error){
        response.json({error});
    }
};

router.post("/addToCart", addToCart);

export default router;