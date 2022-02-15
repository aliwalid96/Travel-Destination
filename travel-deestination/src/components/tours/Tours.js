import Tour from "./tour/Tour";
import "./Tours.css";
import { Link } from "react-router-dom";



function Tours(props) {
    return (
        <>

            {
                props.appsData.map(a => {
                    return (

                        <Tour data={a} />

                    )
                })
            }



        </>



    )

}
export default Tours;