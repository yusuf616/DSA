import { Alert } from "components/Alert/Alert";
import { SET_USER } from "store/actions/Actions"



export const AuthLogout=({dispatch})=>{

    Alert({content:"success logout",color:"success"});

    dispatch({
        type:SET_USER,
        payload:{}
    });


}