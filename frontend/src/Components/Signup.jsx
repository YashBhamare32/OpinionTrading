import { useEffect, useState } from "react";
import { BottomWarning } from "./BottomWarning";
import { Button } from "./Button";
import { Heading } from "./Heading";
import { Input } from "./Input";
import {React} from "react"
import axios from "axios"
import { Link, Navigate, useNavigate } from "react-router-dom";
import {Bounce, ToastContainer , toast} from "react-toastify"


export const Signup = ()=>{
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    const [mobile , setMobile] = useState("")
    const [email , setEmail] = useState("")
    const [firstName , setFirstName] = useState("")
    const [lastName , setLastName] = useState("")
    const navigate = useNavigate();
    const notify = (notification)=>{
        toast(notification);
    }

    const signupLink = "http://localhost:3000/api/v1/auth/signup";
    
    return(
        <div className=" flex justify-center p-12 text-center h-min-screen bg-gray-400">
            <div className=" bg-white rounded-md p-6">
                <div>
                    <Heading text="Sign Up" info="Enter your information to create an account"/>
                    
                </div>
                <div>
                    <Input onChange={(e)=>{
                        setUsername(e.target.value);
                    }} type={"text"} title={"Username"} placeHolder={"johndoe123"}/>

                    <Input onChange={(e)=>{
                        setPassword(e.target.value);
                    }} type={"password"} title={"Password"} placeHolder={""}/>

                    <Input onChange={(e)=>{
                        setEmail(e.target.value);
                    }} type={"text"} title={"Email-Id"} placeHolder={"johndoe@example.com"}/>

                    <Input onChange={(e)=>{
                        setMobile(e.target.value);
                    }} type={"text"} title={"Mobile No."} placeHolder={"12345670"}/>

                    <Input onChange={(e)=>{
                        setFirstName(e.target.value);
                    }} type={"text"} title={"First Name"} placeHolder={"John"}/>

                    <Input onChange={(e)=>{
                        setLastName(e.target.value);
                    }} type={"text"} title={"Last Name"} placeHolder={"Doe"}/>
                    
                </div>

                <Button onClick={async ()=>{
                    const packedObj = {
                        username,
                        password,
                        email,
                        mobile,
                        firstName,
                        lastName,
                    };
                    console.log(packedObj);
                    try {
                        const response = await axios.post(signupLink , packedObj ,{
                            headers:{"Content-type":'application/json'}
                        })
                        console.log(response.data);
                        console.log("Response success"+response.status)
                        if(response.status==200 || response.status==201){
                            
                            console.log(response.data.token);
                            // notify("Signed up successfully");
                            setTimeout(()=>{
                                navigate("/login");
                            } , 3000);
                        }else{
                            // notify("Incorrect inputs / Mail already in use");   
                        }
                    } catch (error) {
                        console.log(error);
                        // notify("Incorrect inputs / Mail already in use");   
                    }
                }} text={"Sign Up"}/>
                <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="dark"
                        transition={Bounce}
                        />
                <BottomWarning text={"Already have an account?"} buttonText={"Sign in"} to={"/login"}/>
            </div>
        </div>
    )
}