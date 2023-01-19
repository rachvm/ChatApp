import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config()

const uri = process.env.ATLAS;
const client = new MongoClient(uri);
const database = client.db('gettogether');
const collection = database.collection('chat');

export async function getAllPosts() {
    const message = collection.find()
    const results = await message.toArray();
    return results
}