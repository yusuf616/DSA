import { SetSidebarItems } from "components/sidebar/SetSidebarItems"
import { Fbonc } from "pages/Content/Fbonc";
import { FaFaucet } from "react-icons/fa"
import { Outlet, useNavigate, useParams } from "react-router-dom"



export const DSA=()=>{
    
    const {param1,param2}=useParams();

    const navigate=useNavigate();

    const selectedItem=(rout)=>{
        return ("dsa-"+rout)===(param1+"-"+param2);
    }


    const list =[
        {
            content:"Fibonacci",
            icon:<FaFaucet/>,
            onClick:()=>{navigate("./fbonc")},
            selected:selectedItem("fbonc")
        }
    ]

    const Pages={
        "fbonc":<Fbonc/>
    }

    return <>
        <SetSidebarItems items={list} removeItems={false}/>
        {Pages?.[param2]}
    </>
} 