import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { SET_SIDEBAR_ITEMS } from "store/actions/Actions";



export const SetSidebarItems=({items=[],removeItems=true})=>{

    const dispatch=useDispatch();

    useEffect(()=>{
        dispatch({
            type:SET_SIDEBAR_ITEMS,
            payload:items
        });

        return ()=>removeItems?dispatch({
            type:SET_SIDEBAR_ITEMS,
            payload:[]
        }):null;

    },[items]);

}