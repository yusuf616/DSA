import "assets/css/components/sidebar.css"
import { List } from "components/List/List";
import { useSelector } from "react-redux";


export const Sidebar=({
    style={width:"20%"},
    items=[],
})=>{
    
    const {sidebarItems}=useSelector(state=>state)

    return<div   style={{height:"100%",...style,transition:"0.5s"}}> 
        <div className=" sidebar ">
            <List items={ [...sidebarItems||[],...items||[]]}/>
        </div>
    </div>
}