import "assets/css/components/sidebar.css"
import { useNavigate } from "react-router-dom";

export const Sidebar=({
    style={width:"20%"},
    items=[],
    onClick=()=>{} 
})=>{
    const navigate=useNavigate();

    const handleClick=(item)=>{
        onClick(item);
        item?.url&&navigate(item?.url);
    }

    return<div  style={{height:"100%",...style}}> 
        <div className=" sidebar ">
            {items?.map((item,index)=><div onClick={()=>handleClick(item)} key={index} className=" item ">
                {item?.title}
            </div>)}
        </div>
    </div>
}