import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";
const Card = ({name,address,website,imageUrl}) => {
    return(
        <div style={{display:"flex",flexDirection:"column",height:"380px",width:"300px",marginLeft:"1rem",marginRight:"1rem",marginBottom:"1rem",border:"2px solid black",padding:"1rem"}}>
                <img src={imageUrl} alt="Card image cap" style={{height:"200px",height:"250px"}} />
                <div>
                    <h5>{name}</h5>
                    <p >{address}</p>
                    <Link to="/edit-details">Edit Info</Link>
                </div>
            </div>
        )
}
export default Card;