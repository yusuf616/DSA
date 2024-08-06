import { Alert } from "components/Alert/Alert";
import { Box } from "components/Box/Box";
import { Button } from "components/buttons/Button";
import { Input } from "components/Input/Input"
import { Content, Description, Page, Paragraph, Title } from "components/PageContent/Page";
import { useEffect, useState } from "react"


export const Fbonc=()=>{ // Fibonacci
    
    const [number,setNumber]=useState("");
    const [start,setStart]=useState(false);

    const [counter,setCounter]=useState([]);




    useEffect(()=>{
        if(number>30){
            Alert({content:"the number can not to be biger then 30",color:"worning"});
            setNumber("30");
        }
    },[number]);





    

    const handleChange=(e)=>{
        const value=e?.target?.value
        if(parseInt(value)==value){
            setNumber(value)
        }else if(value?.length===0){
            setNumber("");
        }
    }



    useEffect(()=>{
        let a;
        if(start){
            let temp=counter||[];
            if(temp?.length===0){
                temp.push(0)
                temp.push(1)
                setCounter([...temp]);

            } else{
                a=setTimeout(()=>{
                    temp.push((counter?.[counter?.length-2]||0)+(counter?.[counter?.length-1]||1))
                    setCounter([...temp]);
                    // console.log(temp?.length===number);
                    if(temp?.length==number){
                        setStart(false)
                    }
                },3000)
            }
            

            
        }else{
            clearTimeout(a);
        }
    },[start,counter]);


    return <Page >
        
        <Description>
            <Title>
                Fibonacci
            </Title>
            <Paragraph>
                The Fibonacci numbers are very useful for introducing algorithms, so before we continue, here is a short introduction to Fibonacci numbers.
                The Fibonacci numbers are named after a 13th century Italian mathematician known as Fibonacci.
                The two first Fibonacci numbers are 0 and 1, and the next Fibonacci number is always the sum of the two previous numbers, so we get 0, 1, 1, 2, 3, 5, 8, 13, 21, ...
            </Paragraph>
        </Description>

        <Content>
            <div>
                <Input  disabled={start}   placeholder=" Enter Number " value={number}  onChange={handleChange} onKeyDown={(e)=>{if(e?.key==="Enter"&&number?.length){setStart(true)}}} />
            </div>
            <Button onClick={()=>number?.length&&setStart(prev=>!prev)} >{start?"stop":"start"}</Button>
            <div>
            {counter?.map((c,index)=><Box className={ counter?.length-index<=2? " animat-box ":""}  key={index}>
                <div style={{position:"absolute" ,top:10,left:10}}>{index+1}</div>
                <div style={{textAlign:"center"}}>
                    <div>{index>1?(counter[index-2]+" + "+counter[index-1]):""}</div>
                    {c}
                </div>
            
            </Box>)}

            </div>
        </Content>

        
    </Page>


}