

import "assets/css/components/input.css"
import { useEffect, useState } from "react"

export const Input=({
    onChange=()=>{},
    value="",
    onKeyDown=()=>{},
    placeholder="",
    disabled=false,
    name="",
    style={}
    
})=>{

    const [localValue,setLocalValue]=useState("");

    const handleChange=(e)=>{
        setLocalValue(e?.target?.value);
        onChange(e);
    }

    useEffect(()=>{
        if(value!==localValue){
            setLocalValue(value)
        }
    },[value]);


    return  <input id="input" style={style} name={name} disabled={disabled}  onKeyDown={onKeyDown} className=" input " value={localValue} onChange={handleChange} placeholder={placeholder}  />
}