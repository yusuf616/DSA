import { HiddenSidebar ,Header as HHeader } from "components/HiddenSidebar/HiddenSidebar";
import { Img } from "components/Img/Img";
import { ToogleButton } from "components/ToogleButton/ToogleButton";
import { useState } from "react";
import userPhoto from "assets/images/user.png"


export const Header=()=>{
    const [isOpen,setIsOpen]=useState();
    
    
    
    return ( <>
    <div className=" header " style={{position:"relative"}}>
        
    </div>
    <div className=" header ">
        
        <div style={{height:"100%",width:"100px",display:"flex",justifyContent:"end",alignItems:"center"}}>
            <ToogleButton isOpen={isOpen} onClick={()=>setIsOpen(prev=>!prev)}/>
        </div>
        <HiddenSidebar isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <HHeader>
                <Img src=" "/>
            </HHeader>
        </HiddenSidebar>
        
    </div>
    </>   );
}