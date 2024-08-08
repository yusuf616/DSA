import { Box } from "components/Box/Box";
import { Button } from "components/buttons/Button";
import { ButtonGroup } from "components/buttons/ButtonGroup";
import { Input } from "components/Input/Input"
import { Content,Page} from "components/PageContent/Page"
import { useEffect, useRef, useState } from "react";




export const MinMax=()=>{


    const [start,setStart]=useState(false);
    const [number,setNumber]=useState("");
    const [numbersArray,setNumbersArray]=useState([]);
    const [finesh,setFinesh]=useState(false);
    const numbersInterval=useRef();
    const searchTimeout=useRef();
    const activeIndexRef=useRef(0)
    
    const [activeBox,setActiveBox]=useState(null);
    const [selectedBox,setSelectedBox]=useState(null);

    const [minmax,setMinmax]=useState(null);




    useEffect(()=>{
        
        if(number&&!(numbersArray?.length < number) ){
            setFinesh(false);
            clearInterval(numbersInterval.current)
            activeIndexRef.current=1
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
        
        if(activeIndexRef.current<(numbersArray?.length-1)){
            if(activeBox){
                searchTimeout.current= setTimeout(()=>{
                    
                    console.log(minmax);
                    switch(minmax?.name){
                        case "min":
                            if(selectedBox?.value>activeBox?.value){
                                setSelectedBox(activeBox);
                            }
                            break;
                        case "max":
                            if(selectedBox?.value<activeBox?.value){
                                setSelectedBox(activeBox);
                            }
                            break;
                        default :
                            break;

                    }
                    
                    activeIndexRef.current=activeIndexRef.current+1
                    setActiveBox(numbersArray?.[activeIndexRef?.current]);
                },3000)
            }
        }else if(activeIndexRef.current) {

            clearTimeout(searchTimeout.current);
            searchTimeout.current=setTimeout(()=>{
                activeIndexRef.current&&setFinesh(true);
                setStart(false);
            },3000)
        }



        return ()=>clearInterval(searchTimeout.current)
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
                      
                    <Box className=" green-box " style={{width:40,height:40}} >
                        {activeBox?.value}
                    </Box> 
                    <Box className=" orange-box " style={{width:40,height:40,border:"none"}} > 
                        <h1> {minmax?.name==="max"?">":"<"} </h1> 
                    </Box>  
                    
                    <Box style={{width:40,height:40}} className=" red-box "  > 
                        {selectedBox?.value} 
                    </Box> 
                </div>

                {finesh&&<Box style={{width:40,height:40}} className=" center " >  End</Box>}
                <ButtonGroup 
                    buttons={[
                        {title:"Max",id:1,name:"max"},
                        {title:"Min",id:2,name:"min"},
                    ]}
                    onClick={(btn)=>{setMinmax(btn)}}
                    activeButton={minmax||{title:"Max",id:1,name:"max"}}
                />


                
            </div>


            {numbersArray?.map((n,index)=><Box style={{width:50, height:50}} className={
                    (activeBox?.id===n?.id ? " animat-box green-box ":"")+
                    (selectedBox?.id===n?.id&& " red-box  ")
                }  
                key={index}
            >
                {n?.value}
            </Box>)}

        </Content>
    </Page>)
}