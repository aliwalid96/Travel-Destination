import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import appsData from "../../data/db.json"

function Home(props){
   // console.log(appsData);
return(
<>

< Header/>

<Tours appsData={props.appsData}  />
<Footer/>

</>
)





}
export default Home;