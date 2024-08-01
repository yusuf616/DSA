
import { Img as IImg  } from "components/Img/Img"
import { useState } from "react";

export const Img=(props)=>{

    const [images,setImages]=useState([]);

    const handleChange=(e)=>{

        const temp=[]
        for(let i=0;i<e?.target?.files?.length;i++){
            temp.push(e?.target?.files?.[i]);
        }
        props?.onChange(temp);
        setImages(temp);
    }


    
    return <div className=" input ">
        <div className=" img ">
            <input multiple={props?.multiple} required={props?.required} title={props?.title}  name={props?.name}  onChange={handleChange} hidden id="input-img" type="file" />
            <label htmlFor="input-img"   >
                <IImg rounded="full" hover={true} src={images?.[0]}  />
            </label>
        </div>
    </div>
}