import { Client, Databases, Account, ID } from "node-appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.VITE_PROJECT_ID);

export const account = new Account(client);
export const databases = new Databases(client);
export { ID };
