import React from "react"
import Reply from "../Replies"
import  { useState } from 'react'
import { TrashIcon } from "@heroicons/react/24/solid"
// import Delete from "../DeletePost"

export default function Post ( { name, surname, post, array, created, postID, handleDeleteClick} ) {
    // console.log(postID);
    const [comments, setComments] = useState(false)

    const handleClick = () => {
        handleDeleteClick(postID)
        // console.log(postID);
        
    }
    return(
        <div className="card">
            <p className="date">{created}</p>
            <p className="author">{name} {surname}</p>
            <p className="post">{post}</p>
            
            <div className="flex justify-end">
            <TrashIcon onClick={handleClick} className="h-6 w-6 text-yellow-500" />
            </div>

            <button className="mt-4 border-2 rounded-sm text-sm text-yellow-800 border-yellow-500" onClick={() => setComments(!comments)}> Comments</button>
            {comments && (
                <div>
                    {array.map((x) => (
                <Reply key={x._id} name={x.name} surname={x.surname} reply={x.reply} created={created}/>
            ))}
                </div>
            )}
            
            
        </div>
         

   
    )
}