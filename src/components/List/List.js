import "assets/css/components/list.css"


export const List=({children,items=[]})=>{ //Unordered HTML List
    return <ul className=" list ">
        {items?.map((item,index)=><ListItem onClick={()=>item?.onClick?.()} key={index} >
            <ListIcon>
                {item?.icon}
            </ListIcon>
            <ListContent>
                {item?.content}
            </ListContent>
        </ListItem>)}
        {children}
    </ul>
}



export const ListItem=({children, onClick=()=>{}})=>{
    return <li >
        <div className=" cont " onClick={onClick} >
            {children}
        </div>
    </li>
}

export const ListIcon=({children})=>{
    return <div className=" icon ">
        {children}
    </div> 
};

export const ListContent=({children})=>{
    return <div className=" l-content ">
        {children}
    </div> 
};

