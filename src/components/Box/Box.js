import "assets/css/components/box.css"


import { useEffect, useRef, useState } from "react"



export const Box=({
    style={width:150,height:150},
    children,
    className=""
})=>{

    const [scale,setScale]=useState(0)
    const contentRef=useRef();
    
    useEffect(()=>{
        let a=setTimeout(()=>{
            setScale(1)
            clearTimeout(a);
        },1000);

        let b=setTimeout(()=>{
            contentRef.current.style.scale=1
            clearTimeout(b);
        },30);

    },[]);

    // console.log(scale);
    return <div className={" box "} style={{...style}}>
        <div className="sub-box">
            <div ref={contentRef} className={( scale && className )+" content "}>
                {children} 
            </div>
        </div>
    </div>
}