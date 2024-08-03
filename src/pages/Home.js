

import "assets/css/layout.css"
import { Sidebar } from "components/sidebar/sidebar"
import { useState } from "react"
import { Outlet , useNavigate, useParams } from "react-router-dom"

import { SiGoogledataproc } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";
import { routes } from "routes"
import { SetSidebarItems } from "components/sidebar/SetSidebarItems"

export const Home=()=>{

    const navigate=useNavigate();
    const {param1}=useParams();

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

    return (<>
        <SetSidebarItems items={list}/>  
        Home
    </>);
}