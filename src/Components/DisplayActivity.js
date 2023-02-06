
function DisplayActivity (props) {
   if (props.activity !== undefined)

      return (
         <div className="activity">
            { props.activity !== "" ?
            <p> {props.activity}  </p> :
            <p> We have no advice for you yet</p> }

            { props.activity !== "" && props.link !== "" &&
            <p> You can find additional details here: <a href= {props.link}> {props.link} </a></p> }

         </div>
      )
   else 
         return (
            <div className="activity">
               <p>We have no advice for you, change criteria</p>
            </div>
         )
         
}

export default DisplayActivity;