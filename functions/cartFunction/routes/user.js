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

const loginAccount = async (request, response) => {
    try{
        await account.createEmailPasswordSession(
            request.body.email,
            request.body.password
        );
    }catch(error){
        response.json({error});
    }
}

const logoutAccount = async (request, response) => {
    try{
        await account.deleteSessions();
    }catch(error){
        response.json({error});
    }
}

router.post("/signup", signupAccount);
router.post("/login", loginAccount);
router.post("/logout", logoutAccount);

export default router;