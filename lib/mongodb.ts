import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

let isConnected = false;

export async function connectToDatabase() {
  if (!isConnected) {
    await client.connect();
    isConnected = true;
  }
  return client.db();
}

export { client };
