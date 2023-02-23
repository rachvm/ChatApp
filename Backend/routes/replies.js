import express from 'express';
import { deleteReply } from '../models/replies.js';

const replyRouter = express.Router();
export default replyRouter

// replyRouter.post("/", async function (req, res) {
//     const replyContent = req.body
//     const note = await addPost(replyContent);
//     res.json({ success: true, payload: note });
// });

replyRouter.delete("/:post/:reply", async function (req, res) {
    const post = (req.params.post)
    const reply = (req.params.reply)
    const note = await deleteReply(post, reply);
    res.json({ success: true, payload: note });
});

// replyRouter.patch("/:id", async function (req, res) {
//     const replyContent = req.body
//     const key = req.params
//     const note = await editPost(replyContent, key);
//     res.json(note);
// });
