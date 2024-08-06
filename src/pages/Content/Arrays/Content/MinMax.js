import { Box } from "components/Box/Box";
import { Button } from "components/buttons/Button";
import { Input } from "components/Input/Input"
import { Content,Page} from "components/PageContent/Page"
import { useEffect, useRef, useState } from "react";




export const MinMax=()=>{


    const [start,setStart]=useState(false);
    const [number,setNumber]=useState("");
    const [numbersArray,setNumbersArray]=useState([]);
    const numbersInterval=useRef();
    const searchInterval=useRef();
    const activeIndexRef=useRef(1)
    
    const [activeBox,setActiveBox]=useState(null);
    const [selectedBox,setSelectedBox]=useState(null);




    useEffect(()=>{
        
        if(!(numbersArray?.length < number) ){
            clearInterval(numbersInterval.current)
            setActiveBox(numbersArray?.[activeIndexRef?.current]);
            setSelectedBox(numbersArray?.[0]);
        }

    },[numbersArray]);
   


    useEffect(()=>{
        if(start){
            setNumbersArray([]);
            let i=0;
            numbersInterval.current=setInterval(()=>{   
                setNumbersArray(prev=>[...prev, {value:Math.floor(Math.random()*500),id:++i}]);
            },20);
        }
        return ()=>clearInterval(numbersInterval.current)
    },[start]);


    
    useEffect(()=>{
        if(activeBox){
            searchInterval.current= setInterval(()=>{
                if(selectedBox?.value<activeBox?.value){
                    setSelectedBox(activeBox);
                }
                activeIndexRef.current=activeIndexRef.current+1
                setActiveBox();
            },1000)
        }

        return ()=>clearInterval(searchInterval)
    },[activeBox])





    return (<Page data={{
        description:{
            title:"Select Min/Max Value",
            paragraph:`
                An array is a data structure used to store multiple elements.
                Arrays are used by many algorithms. 
                For example, an algorithm can be used to look through an array to find the max or min value   
            `
        }
    }}>
        <Content>
            <div style={{display:"flex"}} >
                <Input disabled={start} type="number" onChange={(e)=>setNumber(e?.target?.value)} placeholder=" enter number of values " onKeyDown={(e)=>{
                    e?.key==="Enter"&&setStart(prev=>!prev)
                }} />
                <Button onClick={()=>setStart(prev=>!prev)} >{start?"stop":"start"}</Button>
                <div className=" center "  >
                    Selected Value : {selectedBox?.value}
                </div>
            </div>


            {numbersArray?.map((n,index)=><Box className={
                    (activeBox?.id===n?.id&&" animat-box ")+
                    (selectedBox?.id===n?.id&& " select-red ")
                }  
                key={index}
            >
                {n?.value}
            </Box>)}

        </Content>
    </Page>)
}