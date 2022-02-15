import Tour from "./tour/Tour";

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