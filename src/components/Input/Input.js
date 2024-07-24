

import "assets/css/components/input.css"

export const Input=({
    onChange=()=>{},
    value="",
    onKeyDown=()=>{},
    placeholder="",
    disabled=false
})=>{
    return  <input disabled={disabled}  onKeyDown={onKeyDown} className=" input " value={value} onChange={onChange} placeholder={placeholder}  />
}