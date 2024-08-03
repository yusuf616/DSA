import "assets/css/components/page.css" 


export const Page=({children})=>{
    return<div className=" page ">
        {children}
    </div>
}




export const Description=({children})=>{
    return <>
        {children}
    </>
}

export const Content=({children})=>{
    return <>
        {children}
    </>
}