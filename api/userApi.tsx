interface IAccount {
  name: string;
  email: string;
  password: string;
}

export interface IUser {
  $createdAt: string;
  $id: string;
  $updatedAt: string;
  email: string;
  name: string;
}

export async function signupAccount({
  accountData,
}: {
  accountData: IAccount;
}): Promise<void> {
  try {

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

    sessionStorage.clear();
    window.location.reload();
  } catch (error) {
    throw new Error(`There was an error logging into your account, ${error}`);
  }
}

export async function logoutAccount() {
  try {
    await account.deleteSessions();
    window.location.reload();
  } catch (error) {
    throw new Error(`There was an error logging out of your account, ${error}`);
  }
}

export async function getAccount({ setUser }: { setUser: (e: IUser) => void }) {
  try {
    setUser({$createdAt: "", $id: "", $updatedAt: "", email: "", name: ""});
  } catch (error) {
    throw new Error(`There was a problem getting your account, ${error}`);
  }
}
