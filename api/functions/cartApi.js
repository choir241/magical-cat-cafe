import { Client, Users } from 'node-appwrite';
export default async ({ req, res, log, error }) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service

  try {
    log(`Total users: Hatsune Miku`);
  } catch(err) {
    error("Could not list users: " + err.message);
  }

  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};