import EditCard from "../components/EditCard/EditCard";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import data from "../api.json";
import imagedata from "../imageapi.json"

const EditDetails = ()=>{

    return (
        <>

            <div style={{height:"100vh"}}>
                <Header child="Edit Information"/>
                {/* <div style={{height:"76.5vh"}}> */}
                <div style={{display:"flex",height:"76.5%",width:"100%",overflowY:"auto",flexWrap:"wrap",justifyContent:"center",rowGap:"2rem"}} >
                
                {/* data.forEach((data)=>{<EditCard name={data[0].name} phone={data[0].phone} address={`${data[0].address.suite},${data[0].address.street},${data[0].address.city}`} website={data[0].website} email={data[0].email}/>}) */}
                <EditCard name={data[0].name} phone={data[0].phone} address={`${data[0].address.suite},${data[0].address.street},${data[0].address.city}`} website={data[0].website} email={data[0].email}/>
                <EditCard name={data[1].name} phone={data[1].phone} address={`${data[1].address.suite},${data[1].address.street},${data[1].address.city}`} website={data[1].website} email={data[1].email}/>
                <EditCard name={data[2].name} phone={data[2].phone} address={`${data[2].address.suite},${data[2].address.street},${data[2].address.city}`} website={data[2].website} email={data[2].email}/>
                <EditCard name={data[3].name} phone={data[3].phone} address={`${data[3].address.suite},${data[3].address.street},${data[3].address.city}`} website={data[3].website} email={data[3].email}/>
                <EditCard name={data[4].name} phone={data[4].phone} address={`${data[4].address.suite},${data[4].address.street},${data[4].address.city}`} website={data[4].website} email={data[4].email}/>
                <EditCard name={data[5].name} phone={data[5].phone} address={`${data[5].address.suite},${data[5].address.street},${data[5].address.city}`} website={data[5].website} email={data[5].email}/>
                <EditCard name={data[6].name} phone={data[6].phone} address={`${data[6].address.suite},${data[6].address.street},${data[6].address.city}`} website={data[6].website} email={data[6].email}/>
                <EditCard name={data[7].name} phone={data[7].phone} address={`${data[7].address.suite},${data[7].address.street},${data[7].address.city}`} website={data[7].website} email={data[7].email}/>
                <EditCard name={data[8].name} phone={data[8].phone} address={`${data[8].address.suite},${data[8].address.street},${data[8].address.city}`} website={data[8].website} email={data[8].email}/>
                <EditCard name={data[9].name} phone={data[9].phone} address={`${data[9].address.suite},${data[9].address.street},${data[9].address.city}`} website={data[9].website} email={data[9].email}/>

                </div>
                {/* </div> */}
                <Footer style={{position:"fixed" ,left:"0", bottom:"0",right:"0"}}/>
            </div>
            
        </>
    )
}
export default EditDetails;