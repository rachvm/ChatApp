import express from 'express';
import { deletePost } from '../models/replies.js';

const replyRouter = express.Router();
export default replyRouter

// replyRouter.post("/", async function (req, res) {
//     const replyContent = req.body
//     const note = await addPost(replyContent);
//     res.json({ success: true, payload: note });
// });

replyRouter.delete("/:id", async function (req, res) {
    const key = (req.params)
    const note = await deletePost(key);
    res.json({note})
});

// replyRouter.patch("/:id", async function (req, res) {
//     const replyContent = req.body
//     const key = req.params
//     const note = await editPost(replyContent, key);
//     res.json(note);
// });
