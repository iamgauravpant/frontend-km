import React from "react";
import { useState,useContext, useEffect } from "react";
import {toast} from "react-toastify";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import axios from "axios";
import { Link } from "react-router-dom";
const Register = ({})=>{
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading,setLoading] = useState(false); //to set the spinner 
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            const {data} = await axios.post(`http://localhost:8088/api/register`,{
            name , email , password
            });
            console.log("Register Response",data);
            toast.success("Registration Successful . Please login .");
            setName("");
            setEmail("");
            setPassword("");
            setLoading(false);
        }

        catch(err){
            toast.error(err.response.data);
            setLoading(false);  //when there is an error , setLoading will be set to false .
        }
    }
    return (
        <>  
            <Header child="Register"/>
            <div style={{width:"100%",height:"76.5vh"}}>   
                <div className="container col-md-4 offset-md-4 ">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control mb-4 p-4" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name" required/>
                        <input type="email" className="form-control mb-4 p-4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                        <input type="password" className="form-control mb-4 p-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
                        <button type="submit" className="btn col-12 btn-primary p-2" disabled={!name || !email || !password || loading}> {/* button will be disabled if there is no name , no email , no password , and when loading state is set to true */}                   
                            Register
                        </button>
                    </form>
                    <p className="text-center p-3">
                        Already Registered?{" "}
                        {/* <a href="/login">Login</a> */}
                        <Link to="/login">Login</Link>
                    </p>
                </div>
            </div>
            <Footer/>
        </>

    );
};
export default Register;