import "assets/css/components/sidebar.css"
import { List } from "components/List/List";


export const Sidebar=({
    style={width:"20%"},
    items=[],
})=>{
   
    return<div  style={{height:"100%",...style}}> 
        <div className=" sidebar ">
            <List  items={items}/>
        </div>
    </div>
}