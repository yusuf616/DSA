import { Alert } from "components/Alert/Alert";
import { Form, FormInput } from "components/Form/Form"
import { useEffect, useState } from "react";
import { FaSignInAlt } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_USER } from "store/actions/Actions";




export const AuthLogin=()=>{


    const [image,setImage]=useState(null);


    const {user}=useSelector(state=>state);
    const navigate=useNavigate()

    const dispatch=useDispatch();



    useEffect(()=>{
        console.log(user);
        if(user?.username){
            navigate("/");
        }
    },[user])


    const handleSubmit=(e)=>{

        e.values["image"]=image;
        
        Alert({content:"Success",color:"success"});
        
        dispatch({
            type:SET_USER,
            payload:e?.values
        });
    
    }




    return <div className=" f-full-screen center  " >
        <Form onSubmit={handleSubmit} submitTitle={<><FaSignInAlt size={25} style={{marginRight:8}}/> Login</>} >
            <FormInput  type="img" name="image"onChange={(e)=>setImage(e?.[0])} />
            <FormInput autoFocus={true}    name="username" placeholder="User name..."/>
            <FormInput  name="email" placeholder="E-maile..."  />
            <FormInput name="password" placeholder="Password..." type="password" />
        </Form>
    </div>
}