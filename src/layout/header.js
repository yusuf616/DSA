import { HiddenSidebar ,Header as HHeader, Footer,Body } from "components/HiddenSidebar/HiddenSidebar";
import { Img } from "components/Img/Img";
import { ToogleButton } from "components/ToogleButton/ToogleButton";
import { useState } from "react";
import userPhoto from "assets/images/user.png"
import { List, ListContent, ListIcon, ListItem } from "components/List/List";
import { FaSignOutAlt, FaUser } from "react-icons/fa";
import {IoIosSettings} from "react-icons/io"
import { useSelector } from "react-redux";




export const Header=()=>{

    const {user}=useSelector(state=>state);
   
    return ( <>
    <div className=" header " style={{position:"relative"}}>   
    </div>
    <div className=" header ">
        {user?.id? <User/>:"Login"}
    </div>
    </>   );
}


const User=()=>{

    const [isOpen,setIsOpen]=useState();

    const list =[
        {
            icon:<FaUser size={20}/>,
            content:"Profile"
        },
        {
            icon:<IoIosSettings size={20}/>,
            content:"Settings"
        },
        {
            icon:<FaSignOutAlt size={20}/>,
            content:"Logout",
            onClick:()=>{console.log("logout")}
        }
    ]
    

    return <>
        <div style={{height:"100%",width:"100px",display:"flex",justifyContent:"end",alignItems:"center"}}>
            <ToogleButton isOpen={isOpen} onClick={()=>setIsOpen(prev=>!prev)}/>
        </div>
        <HiddenSidebar isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <HHeader>
                <div>
                    <Img hover={true} rounded="full" src={userPhoto}/>
                    <div style={{marginTop:"1rem",textAlign:"center"}}>
                        <h3>User Name</h3>
                        <a href="mailto:user@gmail.com" >user@gmail.com </a>
                    </div>
                </div>
            </HHeader>
            <Body>
                <List items={list}/>
            </Body>
            <Footer>

            </Footer>
        </HiddenSidebar>
    </>
}