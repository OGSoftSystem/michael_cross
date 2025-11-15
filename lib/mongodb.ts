import { mongo_url } from "@/env";
import { MongoClient } from "mongodb";

export async function connectToMongoDB() {
  
  const client = new MongoClient(mongo_url);
  await client.connect();
  const db = client.db("michael-cross");
  return {db, client};
}
