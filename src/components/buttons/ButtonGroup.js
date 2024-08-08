
import "assets/css/components/buttonGroup.css"
import { Button } from "./Button"
import { useEffect, useState } from "react"


export const ButtonGroup=({
    buttons=[],
    onClick=()=>{},
    activeButton
})=>{

    const [active,setActive]=useState(null);



    const handleClick=(btn)=>{
        setActive(btn);
        onClick(btn);
    }


    useEffect(()=>{ 
        if(active?.id!==activeButton?.id){
            setActive(activeButton);
            onClick(activeButton);

        }
    },[activeButton]);

    return <div style={{width:buttons?.length*80}}>
        <div className=" button-group  ">
            {buttons?.map((btn,index)=><Button className={ active?.id && active?.id===btn?.id && "blue-box"} style={{width:80}} onClick={()=>{ handleClick(btn); }} key={index}>  
                {btn?.title}
            </Button>)}
        </div>
    </div>
}