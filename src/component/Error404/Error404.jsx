import { React, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Error404 = () => {
    const Navigate = useNavigate();
    
    useEffect(()=>{
        setTimeout(()=>{           
          Navigate(-1)
        },3000)
      })

    return (
        <>
            <h1>404</h1>
            <h1>File not found</h1>
        </>
    )
}