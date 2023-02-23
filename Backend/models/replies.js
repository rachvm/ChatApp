import { MongoClient } from 'mongodb';
import { ObjectId } from 'mongodb';
import dotenv from "dotenv";
dotenv.config()

const uri = process.env.ATLAS;
const client = new MongoClient(uri);
const database = client.db('gettogether');
const collection = database.collection('chat');


// export async function addReply(postContent) {
//     const message = collection.insertOne(postContent)
//     const results = await message
//     const findId = results.insertedId
//     const newPost = await collection.findOne({_id: findId});
//     return newPost 
// }

export async function deleteReply(reply, post){
    // console.log("post" + post);
    // console.log("reply" + reply);
    const message = await collection.updateOne(
        {_id : ObjectId(post)}, {
            $pull:{
                replies: {_id : ObjectId(reply)}
            }
        }
    )
    const newPost = await collection.findOne({_id : ObjectId(post)});
    // console.log(newPost);
    return newPost 
}

// export async function editPost(postContent, key) {
//     const content = Object.values(postContent).toString()
//     const editID = Object.values(key).toString()
//     const message = await collection
//          .updateOne({_id : ObjectId(editID)},
//                     {$set:{post : content}})
//     const newPost = await collection.findOne({_id : ObjectId(editID)});
//     console.log(newPost);
//     return newPost 
// }