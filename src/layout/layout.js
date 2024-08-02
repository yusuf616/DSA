
import "assets/css/layout.css"
import { Sidebar } from "components/sidebar/sidebar"
import { useState } from "react"
import { Outlet , useNavigate, useParams } from "react-router-dom"
import { Header } from "./header"
import { Body } from "./body"
import { Footer } from "./footer"
import { SiGoogledataproc } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";
import { routes } from "routes"




export const Layout=({
    children
})=>{

    const [sideItems,setSideItems]=useState([]);

    const {param1}=useParams();
    const navigate=useNavigate();

    console.log(param1);

    const list=[
        {
            content:" DSA (Data Structures and Algorithms)",
            icon:<SiGoogledataproc/>,
            onClick:()=>{navigate(routes?.dsa)},
            selected:param1==="dsa"
        },
        {
            content:" C++ ",
            icon:< TbBrandCpp/>,
            onClick:()=>{navigate(routes?.cpp)},
            selected:param1==="cpp"
        }
    ]

    return <div className=" layout " >
        <Header/>
        <Body>     
            <Sidebar style={{width:"20%"}} items={list}/>
            {children||<Outlet/>}
        </Body>
        <Footer>
        </Footer>
    </div>
}