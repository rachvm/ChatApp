import React from "react"
import Reply from "./Reply"
import  { useState } from 'react'

export default function Post ( { name, surname, post, array} ) {
    const [comments, setComments] = useState(false)
    return(
        <div className="card">
            <p className="author">{name} {surname}</p>
            <p className="post">{post}</p>
            <button onClick={() => setComments(!comments)}> Comments</button>
            {comments && (
                <div>
                    {array.map((x) => (
                <Reply key={x._id} name={x.name} surname={x.surname} reply={x.reply} />
            ))}
                </div>
            )}
            
            
        </div>
         

   
    )
}