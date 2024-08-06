import { useEffect, useState } from "react";

export const Text=(props)=>{

    
    const [localValue,setLocalValue]=useState("");

    const{
        onChange,
        value,
        onKeyDown,
        placeholder,
        disabled,
        name,
        style,
        pattern,
        autoFocus,
        required,
        autoComplete,
        type,
        title
    }=props;

    const set=(e)=>{
        setLocalValue(e?.target?.value||"");
        onChange(e);
    }


    const handleChange=(e)=>{
        switch(type){
            case "number":
                isNumber(e?.target?.value)&&set(e);
                break;
            default:
                set(e);
        }
    }


    useEffect(()=>{
        if(value!==localValue){
            setLocalValue(value)
        }
    },[value]);

    return  <input title={title} type={type==="password"?"password":"text"}  autoComplete={autoComplete} autoFocus={autoFocus} required={required}  pattern={pattern} id="input" style={style} name={name} disabled={disabled}  onKeyDown={onKeyDown} className=" input " value={localValue} onChange={handleChange} placeholder={placeholder}  />
    
}




const isNumber=(e)=>{
    try{
        if((e?.length===0)||(parseInt(e)!=="NaN" && e?.length ===(parseInt(e)+"")?.length) )
            return true
        else 
            return false
    }catch{
        return false
    }
}