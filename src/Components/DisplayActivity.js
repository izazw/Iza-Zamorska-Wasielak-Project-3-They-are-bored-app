function DisplayActivity (props) {

   return (
      <div>
         { props.activity === "" ?

         <h2> We have no advice for you yet</h2> :
         <p> {props.activity}</p> }
      </div>
   )
}

export default DisplayActivity;