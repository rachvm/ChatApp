
export default function Reply ( { name, surname, reply, created } ) {
    
    return(
   
            <div className="mt-4 text-left font-bold text-black bg-amber-400 p-2 px-5 rounded-md">
            <p className="text-right pl-2">{created}</p>
            <p>{name} {surname}</p>
            <p>{reply}</p>
        </div>
    ) 
           
        
}