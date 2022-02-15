import"./Tour.css"

function Tour(props){
    return(
<div >
            <h3>name is {props.data.name}</h3>
            <img style={{width: "200", height: "300px"}} src={props.data.image}/>

    </div>

    )

        

}
export default Tour;