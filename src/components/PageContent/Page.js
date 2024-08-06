import "assets/css/components/page.css" 



export const Page=({
    children,
    data=null
})=>{
    return<div className=" page ">
        {data&&<Description>
            <Title>
                {data?.description?.title}
            </Title>
            <Paragraph>
                {data?.description?.paragraph}
            </Paragraph>
        </Description>}
        {children}
    </div>
    
}




export const Description=({children})=>{
    return <div className=" page-description  ">
        <div>
            {children}
        </div>
    </div>
}


export const Title=({children})=>{
    return <h1 className=" title ">
        {children}
    </h1>
}


export const Paragraph=({children})=>{
    return <div className=" paragraph ">
        <p >
            {children}
        </p>
    </div>
}

export const Content=({children})=>{

    return <div  className=" page-content " >
         <div  >
            {children}
        </div>
    </div>
}


