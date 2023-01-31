
export default function Reply ( { name, surname, reply, } ) {
    
    return(
   
            <div className="reply">
            <p>{name} {surname}</p>
            <p>{reply}</p>
        </div>
    ) 
           
        
}