

import "assets/css/layout.css"

import { useNavigate, useParams } from "react-router-dom"

import { SiGoogledataproc } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";
import { routes } from "routes"
import { SetSidebarItems } from "components/sidebar/SetSidebarItems"
import { Card, CardButtons, CardContent, CardIcon, CardTitle } from "components/Card/Card";
import { FaIcons } from "react-icons/fa";
import { Button } from "components/buttons/Button";
// import { Title } from "components/PageContent/Page"

export const Home=()=>{

    const navigate=useNavigate();
    const {param1}=useParams();

    const list=[
        {
            title:"DSA",
            content:" DSA (Data Structures and Algorithms)",
            icon:<SiGoogledataproc/>,
            onClick:()=>{navigate(routes?.dsa)},
            selected:param1==="dsa"
        },
        {
            title:"C++",
            content:" C++ ",
            icon:< TbBrandCpp/>,
            onClick:()=>{navigate(routes?.cpp)},
            selected:param1==="cpp"
        }
    ]

    return (<>
        <SetSidebarItems items={list}/>  


        {
            list.map((item,index)=><Card 
                key={index}
                data={{...item,buttons:[{content:"Show",onClick:item?.onClick}]}}
            />)
        }
        
        {/* <Card
            data={{
                icon:<FaIcons/>,
                title:"Title",
                content:"content",
                buttons:[
                    {
                        content:"Show",
                        onClick:()=>{ console.log("Click") },
                    }
                ]
            }}
        /> */}
    </>);
}