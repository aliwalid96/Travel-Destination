import Header from "../header/Header";
import Tours from "../tours/Tours";
import Footer from "../footer/Footer";
import appsData from "../../data/db.json"

function Home(){
   // console.log(appsData);
return(
<>
< Header/>

<Tours appsData={appsData}  />
<Footer/>

</>
)





}
export default Home;