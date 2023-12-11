
"use client";
import { useParams } from "next/navigation"
import { useEffect, useState } from "react";

export default function Home (){
    const [data , setData] = useState([])
    const {id} = useParams();
    const [isLoading, setIsloading] = useState(true);
    useEffect(()=>{
       try{fetch(`https://dev.to/api/articles/${id}`).then((res)=>res.json()).then((k)=>setData(k))}
       finally{
        setIsloading(false)}
    },[id])

console.log("iddata",data);
console.log();
return(
    <div>
        {isLoading? <div></div>:
            <img src={data.cover_image} />}
        
      
    </div>
)
}