import "assets/css/components/toogleButton.css"



export const ToogleButton=({
    onClick=()=>{},
    children,
    isOpen=false,
    style={}
})=>{

    
    return (<button  style={style} className={" toogle-button "} onClick={onClick}>
        <div className={isOpen?" open ":"  "}></div>
        <div className={isOpen?" open ":"  "}></div>
        <div className={isOpen?" open ":"  "}></div>
        <div className={isOpen?" open ":"  "}></div>
    </button>)
}