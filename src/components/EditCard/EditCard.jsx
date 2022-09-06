import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const EditCard = ({name,address,website,imageUrl,email}) => {
    // const handleSubmit = ()=>{
    //     console.log("fom submit button clicked!!!")
    // }
    return (
        <div className="container">
            <form>
                <div className="form-group row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Name :</label>
                <div className="col-sm-10">
                    <input type="text" readOnly className="form-control-plaintext" id="staticEmail" defaultValue={name} />
                </div>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address :</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={email} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputAddress1">Address :</label>
                    <input type="text" className="form-control" id="exampleInputPassword1" defaultValue={address}/>
                </div>
                <input type="submit" value="update" className="btn btn-primary mt-2"/>
                <br/>
                <small>This functionality is not working yet . Come back tomorrow .</small>
            </form>
        </div>        
    );
}
export default EditCard;

// pta nhi kya error hai ...lekin hai