import { account, ID } from "./appwrite";

interface IAccount {
  name: string;
  email: string;
  password: string;
}

export async function signupAccount({
  accountData,
}: {
  accountData: IAccount;
}) {
  try {
    await account.create(
      ID.unique(),
      accountData.email,
      accountData.password,
      accountData.name,
    );

    loginAccount({ accountData });
  } catch (error) {
    throw new Error(`There was an error creating your account, ${error}`);
  }
}

export async function loginAccount({ accountData }: { accountData: IAccount }) {
  try {
    await account.createEmailPasswordSession(
      accountData.email,
      accountData.password,
    );
  } catch (error) {
    throw new Error(`There was an error logging into your account, ${error}`);
  }
}

export async function logoutAccount() {
  try {
    await account.deleteSessions();
  } catch (error) {
    throw new Error(`There was an error logging out of your account, ${error}`);
  }
}
