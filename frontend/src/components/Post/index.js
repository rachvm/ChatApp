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
        <div className="mt-8 p-8 border-solid border-2 border-yellow-400 bg-black rounded-md font-sans">
            <p className="text-right text-lg text-white">{created}</p>
            <p className="text-left text-lg text-white font-medium">{name} {surname}</p>
            <p className="text-center text-2xl text-amber-200 font-medium">{post}</p>
            
            <div className="flex justify-end">
            <TrashIcon onClick={handleClick} className="h-6 w-6 text-amber-400 hover:opacity-50" />
            </div>

            <button className="bg-amber-400 hover:opacity-50 p-1 rounded-md font-medium text-bold" onClick={() => setComments(!comments)}>Read Comments</button>
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