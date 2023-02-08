
function DisplayActivity (props) {
   if (props.activity !== undefined)

      return (
         <div className="activity">
            { props.activity !== "" ?
            <p> {props.activity}  </p> :
            <p> We have no advice for you yet</p> }

            { props.activity !== "" && props.link !== "" &&
            <p> You can find additional details <a class="activity-link" href= {props.link}>HERE</a>.</p> }

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