import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const CardUser =()=>{
    const {id}=useParams()
    const [profil,setProfil]= useState({})
    const [load,setLoad] = useState(false)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then ((res)=>setProfil(res.data))
        .then (()=>setLoad(true))
        .catch((err)=>console.log(err))
    
    },[])
    return(
        <>
        { load ? <>
                    <h3>Name:{profil.name}</h3>
                    <h3>User Name:{profil.username}</h3>
                    <h3>Phone:{profil.phone}</h3>
                    <h3>Email:{profil.email}</h3>
                    </>
                    : <span>stanna</span>
        }
        </>
    )
}
export default CardUser