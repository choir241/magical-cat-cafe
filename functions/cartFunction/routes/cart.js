import AppExpress from "@itznotabug/appexpress";
const router = new AppExpress.Router();
import { databases, ID } from "../appwrite.js";
const addToCart = async (request, response) => {
    try{
        const cartItem = {
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            gallery: request.body.gallery
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

const editCart = async (request, response) => {
    try{
        const {docId} = request.params

        const cartItem = {
            name: request.body.name,
            description: request.body.description,
            price: request.body.price,
            gallery: request.body.gallery
        };
    
        const data = await databases.updateDocument(
            process.env.VITE_DB_ID,
            process.env.VITE_CART_COLLECTION,
            docId,
            cartItem,
        );
    
        response.json({ data });
    }catch(error){ 
        console.log(error)
        response.json({error});
    }
};

router.post("/addToCart", addToCart);
router.post("/editCart/:docId", editCart);

export default router;