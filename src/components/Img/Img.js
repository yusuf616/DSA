



export const Img=({
    rounded="sm",
    alt="",
    src="",
    style={}
})=>{
    return <div className=" " style={style} >
        <img className="  " alt={alt} src={src} />
    </div> 
}