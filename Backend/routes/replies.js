import express from 'express';
import { deleteReply, addReply } from '../models/replies.js';

const replyRouter = express.Router();
export default replyRouter

replyRouter.post("/:id", async function (req, res) {
    const replyContent = req.body
    const postid = req.params.id
    // console.log(replyContent);
    const note = await addReply(replyContent, postid);
    console.log( note);
    res.json({ note });
});

replyRouter.delete("/:post/:reply", async function (req, res) {
    const post = (req.params.post)
    const reply = (req.params.reply)
    // console.log(reply);
    const note = await deleteReply(post, reply);
    res.json({ success: true, payload: note });
});

// replyRouter.patch("/:id", async function (req, res) {
//     const replyContent = req.body
//     const key = req.params
//     const note = await editPost(replyContent, key);
//     res.json(note);
// });
