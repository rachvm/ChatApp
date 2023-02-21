import { TrashIcon  } from "@heroicons/react/24/solid"

export default function Reply ( { name, surname, reply, created, replyID, handleDelReplyClick } ) {
    
    const handleDeleteClick = () => {
        handleDelReplyClick(replyID)
    }


    return(
   
            <div className="mt-4 font-bold text-black bg-amber-400 p-2 px-5 rounded-md">
                <div>
                <p className="text-right pl-2">{created}</p>
                <p>{name} {surname}</p>
                <p>{reply}</p>
                </div>
                <div className="flex justify-end">
            <TrashIcon onClick={handleDeleteClick} className="h-6 w-6 text-black content-end hover:opacity-50" />
        </div>
        </div>
    ) 
           
        
}