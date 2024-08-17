import "assets/css/components/card.css"
import { Button } from "components/buttons/Button"
import { FaIcons } from "react-icons/fa"


export const Card=({
    children,
    data=null
    
    // {
    //     title:"Card-Title"
    // }
})=>{
    
    return <div className=" card ">
        {children||<>
            <CardIcon> {data?.icon||<FaIcons/>} </CardIcon>
            <CardTitle> {data?.title||"Title"} </CardTitle>
            <CardContent> {data?.content||"Content"} </CardContent>
            <CardButtons buttons={data?.buttons} />
        
        </>}
    </div>
}


export const CardIcon=({
    children
})=>{   

    return <div className="icon">
        {children}
    </div>
}

export const CardTitle=({
    children
})=>{   
    return <div className="title">
        {children}
    </div>
} 


export const CardContent=({
    children
})=>{   
    return <div className="cont">
        {children}
    </div>
} 


export const CardButtons=({
    children,
    buttons=[]
})=>{
    return <div className="btns">
        {children||(buttons?.length?buttons?.map((btn,index)=><Button onClick={btn?.onClick} key={index} > {btn?.content} </Button>):<Button  > {"buttons"} </Button>)}
    </div>
}


 