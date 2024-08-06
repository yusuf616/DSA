

import "assets/css/components/input.css"
import { useEffect, useState } from "react"
import { Text } from "./Text";
import { Img } from "./Img";

export const Input=({
    onChange=()=>{},
    value="",
    onKeyDown=()=>{},
    placeholder="",
    disabled=false,
    name="",
    style={},
    pattern=null,
    autoFocus=false,
    required=false,
    autoComplete="off",
    type="text",
    multiple=false,
    title=""
})=>{

    var props={
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
        multiple,
        title
    }

    const Types={
        "img":<Img {...props}/>,
        "defualt":<Text {...props}/>,
    }


    return Types[type]||Types["defualt"]
    // <input type={type}  autoComplete={autoComplete} autoFocus={autoFocus} required={required}  pattern={pattern} id="input" style={style} name={name} disabled={disabled}  onKeyDown={onKeyDown} className=" input " value={localValue} onChange={handleChange} placeholder={placeholder}  />
}