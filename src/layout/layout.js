
import "assets/css/layout.css"
import { Sidebar } from "components/sidebar/sidebar"
import { Outlet  } from "react-router-dom"
import { Header } from "./header"
import { Body } from "./body"
import { Footer } from "./footer"
import { useSelector } from "react-redux"





export const Layout=({
    children
})=>{


    const {sidebarItems}=useSelector(state=>state);

    return <div className=" layout " >
        <Header/>
        <Body>   
            <Sidebar style={{width:sidebarItems?.length?"300px":"0"}} />
            <div style={{display:"flex",height:"100%",width:sidebarItems?.length?" calc(100% - 300px) ":"0"}}>
                {children||<Outlet/>}
            </div>

        </Body>
        <Footer>
        </Footer>
    </div>
}