import { account, ID } from "./appwrite";

interface IAccount {
    name: string,
    email: string,
    password: string,
}

export async function signupAccount({accountData}: {accountData: IAccount }){
    try{
        await account.create(
            ID.unique(),
            accountData.email,
            accountData.password,
            accountData.name
        );
    }catch(error){
        throw new Error(`There was an error creating your account, ${error}`);
    }
}