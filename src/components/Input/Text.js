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


    const handleChange=(e)=>{
        setLocalValue(e?.target?.value);
        onChange(e);
    }


    useEffect(()=>{
        if(value!==localValue){
            setLocalValue(value)
        }
    },[value]);

    return  <input title={title} type={type}  autoComplete={autoComplete} autoFocus={autoFocus} required={required}  pattern={pattern} id="input" style={style} name={name} disabled={disabled}  onKeyDown={onKeyDown} className=" input " value={localValue} onChange={handleChange} placeholder={placeholder}  />
    
}