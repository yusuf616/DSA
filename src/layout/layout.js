
import "assets/css/layout.css"
import { Sidebar } from "components/sidebar/sidebar"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"


const items=[
    {
        title:"DSA",
        url:"dsa",
        sub:[
            {
                title:"Fibonacci",
                url:"fbonc"
            }
        ]
    }
]

export const Layout=({
    children
})=>{

    const [sideItems,setSideItems]=useState([]);
    const {param1,param2}=useParams();


    useEffect(()=>{
        if(param1){
            setSideItems(items?.filter(i=>i?.url===param1)?.[0]?.sub?.map(s=>({...s,url:param1+"/"+s?.url})));
        }else {
            setSideItems(items);
        }
    },[param1])

    const getTitle=()=>{
        if(param2){
            return items?.filter(i=>i?.url===param1)?.[0]?.sub?.filter(s=>s?.url===param2)?.[0]?.title
        }else {
            return items?.filter(i=>i?.url===param1)?.[0]?.title
        }
        // {param2?items?.filter(s=>s?.url===(param2||param1))?.[0]?.title}

    }
    

    return <div className=" layout " >
        <div className=" header ">
            {/* <button className=" button "> Click </button> */}
        </div>  
        <div className=" body ">
            
            <Sidebar style={{width:"20%"}} items={sideItems}/>
            <div style={{width:"80%",height:"100%",overflowY:"scroll"}}>
                {getTitle()}
                {children||<Outlet/>}
            </div>
        </div>
        <div className=" footer ">
            AAA  
        </div>
    </div>
}