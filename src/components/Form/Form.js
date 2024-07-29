import  "assets/css/components/form.css"
import { Button } from "components/buttons/Button"
import { Input } from "components/Input/Input"
import { useEffect, useRef } from "react";




export const Form=({
    children,
    style={},
    onSubmit=()=>{},
    submitTitle="Submit"
})=>{

    const handleSubmit=(e)=>{
        e.preventDefault()
        const values={}
        let i=0;
        Object.values(e?.target)?.filter(item=>item?.id==="input")?.forEach((item)=>{values[item?.name||"input-"+(++i)]=item?.value});
        onSubmit({
            values
        })
    };

   

    return <form onSubmit={handleSubmit} style={{...style}} className="my-form"> 
        {children}
        <Button style={{width:150,margin:"auto"}} type="submit"> {submitTitle} </Button>
    </form>
} 



export const FormInput=({
    value,
    onChange=()=>{},
    onKeyDown=()=>{},
    placeholder="",
    disabled=false,
    name="",
    style={fontSize:20,marginTop:20}
})=>{
    return <Input style={style} name={name} placeholder={placeholder} disabled={disabled} value={value} onChange={onChange} onKeyDown={onKeyDown} />
}