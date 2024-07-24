

import "assets/css/components/button.css"


export const Button=({
    children,
    title="",
    onClick=()=>{}
})=>{
    return <button className=" button " title={title} onClick={onClick}>
        {children}
    </button>
}