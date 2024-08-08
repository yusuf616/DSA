

import "assets/css/layout.css"

import { useNavigate, useParams } from "react-router-dom"

import { SiGoogledataproc } from "react-icons/si"
import { TbBrandCpp } from "react-icons/tb";
import { routes } from "routes"
import { SetSidebarItems } from "components/sidebar/SetSidebarItems"
import { Card } from "components/Card/Card";
// import { Title } from "components/PageContent/Page"

export const Home=()=>{

    const navigate=useNavigate();
    const {param1}=useParams();

    const list=[
        {
            content:" DSA (Data Structures and Algorithms)",
            icon:<SiGoogledataproc/>,
            onClick:()=>{navigate(routes?.dsa)},
            selected:param1==="dsa"
        },
        {
            content:" C++ ",
            icon:< TbBrandCpp/>,
            onClick:()=>{navigate(routes?.cpp)},
            selected:param1==="cpp"
        }
    ]

    return (<>
        <SetSidebarItems items={list}/>  
        <Card>
        </Card>
    </>);
}