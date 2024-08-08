

import "assets/css/components/button.css"


export const Button=({
    children,
    title="",
    onClick=()=>{},
    style={},
    type="button",
    className=""
})=>{
    return <button type={type} style={{...style}}  className={" my-button "+className} title={title} onClick={onClick}>
       
        {children}
        
    </button>
}