import { Form, FormInput } from "components/Form/Form"
import { FaSignInAlt } from "react-icons/fa"




export const AuthLogin=()=>{
    return <div className=" f-full-screen center ">

        <Form onSubmit={(e)=>{console.log(e?.values)}} submitTitle={<><FaSignInAlt size={25} style={{marginRight:8}}/> Login</>} >
            <FormInput name="username"  placeholder="User name..."/>
            <FormInput name="email" placeholder="E-maile..."  />
            <FormInput  name="password" placeholder="Password..." />
        </Form>

    </div>
}