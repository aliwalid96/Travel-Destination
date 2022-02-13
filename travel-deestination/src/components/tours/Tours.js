

function Tours(props){
return(
<>

{
props.appsData.map(a =>{
    return(
        
        <div>
            <h3>name is {a.name}</h3>
            <img src={a.image}/>

        </div>
        
    )
})
}






</>



)

}
export default Tours;