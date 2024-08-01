import { HiddenSidebar ,Header as HHeader, Footer,Body } from "components/HiddenSidebar/HiddenSidebar";
import { Img } from "components/Img/Img";
import { ToogleButton } from "components/ToogleButton/ToogleButton";
import { useState } from "react";
import userPhoto from "assets/images/user.png"
import { List, ListContent, ListIcon, ListItem } from "components/List/List";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import {IoIosSettings} from "react-icons/io"
import { useSelector } from "react-redux";
import { Button } from "components/buttons/Button";
import { useNavigate } from "react-router-dom";
import { routes } from "routes";




export const Header=()=>{

    const {user}=useSelector(state=>state);
    const navigate=useNavigate();
   
    return ( <>
    <div className=" header " style={{position:"relative"}}>   
    </div>
    <div className=" header ">
        <div style={{height:"100%",width:"100px",display:"flex",justifyContent:"end",alignItems:"center"}}>
            {user?.username? <User/>:<Button onClick={()=>navigate(routes?.login)} > <FaSignInAlt  style={{marginRight:8}} /> Login</Button>}
            
            {/* <ToogleButton isOpen={isOpen} onClick={()=>setIsOpen(prev=>!prev)}/> */}
        </div>
        {/* {user?.id? <User/>:<Button>Login</Button>} */}
    </div>
    </>   );
}


const User=()=>{

    const {user}=useSelector(state=>state);
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
        {/* <div style={{height:"100%",width:"100px",display:"flex",justifyContent:"end",alignItems:"center"}}> */}
        <ToogleButton isOpen={isOpen} onClick={()=>setIsOpen(prev=>!prev)}/>
        {/* </div> */}
        <HiddenSidebar isOpen={isOpen} onClose={()=>setIsOpen(false)}>
            <HHeader>
                <div>
                    <Img hover={true} rounded="full" src={user?.image||userPhoto}/>
                    <div style={{marginTop:"1rem",textAlign:"center"}}>
                        <h3>{user?.username}</h3>
                        <a href="mailto:user@gmail.com" >{user?.email} </a>
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