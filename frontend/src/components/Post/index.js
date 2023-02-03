import React from "react"
import Reply from "../Replies"
import  { useState } from 'react'

export default function Post ( { name, surname, post, array, created} ) {
    const [comments, setComments] = useState(false)
    return(
        <div className="card">
            <p className="date">{created.split("T").shift()}</p>
            <p className="author">{name} {surname}</p>
            <p className="post">{post}</p>
            <div>
                
            </div>
            <button className="mt-4 border-2 rounded-sm text-sm border-yellow-500" onClick={() => setComments(!comments)}> Comments</button>
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