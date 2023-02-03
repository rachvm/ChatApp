
export default function Reply ( { name, surname, reply, created } ) {
    
    return(
   
            <div className="reply">
            <p className="date">{created.split("T").shift()}</p>
            <p>{name} {surname}</p>
            <p>{reply}</p>
        </div>
    ) 
           
        
}