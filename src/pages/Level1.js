import { useParams } from "react-router-dom"
import { DSA } from "./Level1/DSA";
import { Cpp } from "./Level1/Cpp";



export const Level1=()=>{
    
    const {param1}=useParams();

    const Pages={
        "dsa":<DSA/>,
        "cpp":<Cpp/>
    }


    return <>
        {Pages?.[param1]}
    </>
} 