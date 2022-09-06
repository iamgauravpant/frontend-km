import React from "react";
import { useState,useRouter,useContext, useEffect } from "react";
import {toast} from "react-toastify";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import {Link,useNavigate} from "react-router-dom";
import axios from "axios";
import { useAuth } from "../components/Context/auth";

const Login = ({})=>{
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    const [loading,setLoading] = useState(false); //to set the spinner 
    const auth = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async(e)=>{
        e.preventDefault();
        try{
            setLoading(true);
            const {data} = await axios.post(`http://localhost:8088/api/login`,{
            email , password
            });
            auth.login(data);
            // save in local storage 
            window.localStorage.setItem("user",JSON.stringify(data));
        
            // redirect the user to user dashboard ("/user") after login
            // router.push("/user");
            navigate('/');
        // setLoading(false);
        }

        catch(err){
            toast.error(err.response.data);
            setLoading(false);  //when there is an error , setLoading will be set to false .
        }
    }
    return (

        <>     
            <Header child="Login"/>
            <div style={{width:"100%",height:"76.5vh"}}>
                <div className="container col-md-4 offset-md-4">
                    <form onSubmit={handleSubmit}>
                        <input type="email" className="form-control mb-4 p-4" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" required/>
                        <input type="password" className="form-control mb-4 p-4" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" required/>
                        <button type="submit" className="btn col-12 btn-primary" disabled={ !email || !password || loading}> {/* button will be disabled if there is no name , no email , no password , and when loading state is set to true */}                   
                            Login
                        </button>
                    </form>
                    <p className="text-center pt-3">
                        Not registered yet?{" "}
                        <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
            <Footer/>
    </>


    );
};
export default Login;