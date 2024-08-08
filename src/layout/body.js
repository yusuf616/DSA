import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { SET_SCORE } from "store/actions/Actions";


const scors={
    "dsa":{
        total:2,
        completed:0,
        content:{
            "fbonc":{
                total:1,
                completed:0
            },
            "arrays":{
                total:1,
                completed:0,
                content:{
                    "minmax":{
                        total:1,
                        completed:0, 
                    }
                }  
            }
        }
    },
    "cpp":{}
}


export const Body=({children})=>{

    const {score}=useSelector(state=>state);
    const dispatch=useDispatch();

    useEffect(()=>{
        !Object.keys(score)?.length&&dispatch({
            type:SET_SCORE,
            payload:scors
        })
    },[score])


    return  <div className=" body ">
        <div className=" container  ">
            {children}
        </div>
    </div>
}