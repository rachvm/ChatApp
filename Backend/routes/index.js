import express from 'express';
import { getAllPosts, addPost, deletePost } from '../models/index.js';

const chatRouter = express.Router();
export default chatRouter

chatRouter.get("/", async function (req, res) {
    const results = await getAllPosts();
    res.json({ success: true, payload: results });
});

chatRouter.post("/", async function (req, res) {
    const postContent = req.body
    const note = await addPost(postContent);
    res.json({ success: true, payload: note });
});

chatRouter.delete("/", async function (req, res) {
    const key = (req.body)
    const note = await deletePost(key);
    res.json({note})
});

