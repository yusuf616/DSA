import { SetSidebarItems } from "components/sidebar/SetSidebarItems";
import { Fa500Px } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import { MinMax } from "./Content/MinMax";




export const Arrays=()=>{


    const {param1,param2,param3}=useParams();

    const navigate=useNavigate();
    
    const selectedItem=(rout)=>{
        return ("dsa-arrays-"+rout)===(param1+"-"+param2+"-"+param3);
    }


    const list=[
        {
            content:" Min Max Value ",
            icon:<Fa500Px/>,
            onClick:()=>{navigate(param2+"/min-max")},
            selected:selectedItem("min-max")
        }
    ]


    const Pages={
        "min-max":<MinMax/>
    }

    return (<>
        <SetSidebarItems items={list} removeItems={false}/>
        {Pages[param3]||""}

    </>);
}