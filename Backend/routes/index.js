import express from 'express';
import { getAllPosts } from '../models/index.js';

const chatRouter = express.Router();
export default chatRouter

chatRouter.get("/", async function (req, res) {
    const results = await getAllPosts();
    res.json({ success: true, payload: results });
    console.log("results from routes" + results);
});

