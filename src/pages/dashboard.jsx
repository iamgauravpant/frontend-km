import Card from "../components/Card/Card";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import data from "../api.json";
import imagedata from "../imageapi.json"
const Dashboard = ()=>{
    // console.log(data)
    // console.log(imagedata);
    return (
        <>

            <div style={{height:"100vh"}}>
                <Header child="Dashboard"/>
                {/* <div style={{height:"76.5vh"}}> */}
                <div style={{display:"flex",height:"76.5%",width:"100%",overflowY:"auto",flexWrap:"wrap",justifyContent:"center",rowGap:"2rem"}} >
                    <Card name={data[0].name} phone={data[0].phone} address={`${data[0].address.suite},${data[0].address.street},${data[0].address.city}`} website={data[0].website} imageUrl={imagedata[0].download_url}/>
                    <Card name={data[1].name} phone={data[1].phone} address={`${data[1].address.suite},${data[1].address.street},${data[1].address.city}`} website={data[1].website} imageUrl={imagedata[1].download_url}/>
                    <Card name={data[2].name} phone={data[2].phone} address={`${data[2].address.suite},${data[2].address.street},${data[2].address.city}`} website={data[2].website} imageUrl={imagedata[2].download_url}/>
                    <Card name={data[3].name} phone={data[3].phone} address={`${data[3].address.suite},${data[3].address.street},${data[3].address.city}`} website={data[3].website} imageUrl={imagedata[3].download_url}/>
                    <Card name={data[4].name} phone={data[4].phone} address={`${data[4].address.suite},${data[4].address.street},${data[4].address.city}`} website={data[4].website} imageUrl={imagedata[4].download_url}/>
                    <Card name={data[5].name} phone={data[5].phone} address={`${data[5].address.suite},${data[5].address.street},${data[5].address.city}`} website={data[5].website} imageUrl={imagedata[5].download_url}/>
                    <Card name={data[6].name} phone={data[6].phone} address={`${data[6].address.suite},${data[6].address.street},${data[6].address.city}`} website={data[6].website} imageUrl={imagedata[6].download_url}/>
                    <Card name={data[7].name} phone={data[7].phone} address={`${data[7].address.suite},${data[7].address.street},${data[7].address.city}`} website={data[7].website} imageUrl={imagedata[7].download_url}/>
                    <Card name={data[8].name} phone={data[8].phone} address={`${data[8].address.suite},${data[8].address.street},${data[8].address.city}`} website={data[8].website} imageUrl={imagedata[8].download_url}/>
                    <Card name={data[9].name} phone={data[9].phone} address={`${data[9].address.suite},${data[9].address.street},${data[9].address.city}`} website={data[9].website} imageUrl={imagedata[9].download_url}/>
                </div>
                {/* </div> */}
                <Footer style={{position:"fixed" ,left:"0", bottom:"0",right:"0"}}/>
            </div>
            
        </>
    )
}
export default Dashboard;