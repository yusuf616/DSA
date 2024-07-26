import { HiddenSidebar ,Header as HHeader, Footer } from "components/HiddenSidebar/HiddenSidebar";
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
                <div >
                    
                    <Img hover={true} rounded="full" src={userPhoto}/>
                    <div style={{marginTop:"1rem",textAlign:"center"}}>
                        <h3>User Name</h3>
                        <a href="mailto:user@gmail.com" >user@gmail.com </a>
                    </div>
                </div>
            </HHeader>
            <Footer>
                
            </Footer>
        </HiddenSidebar>
        
    </div>
    </>   );
}