import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const ListUsers =()=>{
    const [List,setList] = useState ([])
    const [loading,setLoading] = useState(false)
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then ((res)=>setList(res.data))
        .then (()=>setLoading(true))
        .catch((err)=>console.log(err))
    
    },[])
    return(
        <>
            {
           loading? List.map(user=><Link to={`/List/${user.id}`}><h2>{user.name}</h2></Link>)  : <>loading</>
            }
        </>
    )
}
export default ListUsers