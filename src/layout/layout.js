
import "assets/css/layout.css"
import { Sidebar } from "components/sidebar/sidebar"
import { useEffect, useState } from "react"
import { Outlet, useParams } from "react-router-dom"
import { Header } from "./header"
import { Body } from "./body"
import { Footer } from "./footer"




export const Layout=({
    children
})=>{

    const [sideItems,setSideItems]=useState([]);
    const {param1,param2}=useParams();



    

    return <div className=" layout " >
        <Header/>
        <Body>     
            {/* <Sidebar style={{width:"20%"}} items={sideItems}/> */}
            {children||<Outlet/>}
        </Body>
        <Footer>
            AAAA
        </Footer>
    </div>
}