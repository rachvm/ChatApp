import { TrashIcon  } from "@heroicons/react/24/solid"
import { useAuth0 } from "@auth0/auth0-react"

export default function Reply ( { name, surname, reply, created, replyID, postID, handleDelClick } ) {  
    const { isAuthenticated } = useAuth0
    const handleClick = () => {
        handleDelClick(postID, replyID) 
    }

    return(

        <div className="mt-4 font-bold text-black bg-amber-400 p-2 px-5 rounded-md">
            <p className="text-right pl-2">{created}</p>
            <p className="text-left text-lg text-black font-medium">{name} {surname}</p>
            <p className="text-center text-2xl text-black font-medium">{reply}</p>
            
            <div className="flex justify-end">
            
            {isAuthenticated ? 
            (<TrashIcon onClick={handleClick} className="h-6 w-6 text-black hover:opacity-50" />) :
            (<TrashIcon className="h-6 w-6 text-black hover:opacity-50" />)}
            
            </div>
            </div>

    ) 
           
        
}