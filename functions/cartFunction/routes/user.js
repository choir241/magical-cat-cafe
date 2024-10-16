import AppExpress from "@itznotabug/appexpress";
const router = new AppExpress.Router();
import { account, ID } from "../appwrite.js";

const signupAccount = async (request, response) => {
    try{
        const accountData = {
            name:  request.body.email,
            password: request.body.password,
            email: request.body.email
        }

        const data = await account.create(
            ID.unique(),
            accountData
        );

        loginAccount({ data });
    }catch(error){
        response.json({error});
    }
}

router.post("/signup", signupAccount);

export default router;