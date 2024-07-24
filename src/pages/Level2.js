import { Outlet, useParams } from "react-router-dom"
import { Fbonc } from "./Content/Fbonc"
import { useState } from "react"



export const Level2=()=>{

    const {param1,param2}=useParams()


    const Pages={
        "dsa":{
            "fbonc":<Fbonc/>
        }
    }


    return <>{Pages?.[param1]?.[param2]}</>
} 