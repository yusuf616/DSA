

import "assets/css/components/button.css"


export const Button=({
    children,
    title="",
    onClick=()=>{},
    style={},
    type="button"
})=>{
    return <button type={type} style={{...style}}  className=" my-button " title={title} onClick={onClick}>
        <abbr title="AAA">
            {children}
        </abbr> 
    </button>
}