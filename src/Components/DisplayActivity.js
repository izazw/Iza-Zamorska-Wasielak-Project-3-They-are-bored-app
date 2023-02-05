function DisplayActivity (props) {
   if (props.activity !== undefined)

      return (
         <div>
            { props.activity !== "" ?
            <p> {props.activity}  </p> :
            <p> We have no advice for you yet</p> }

            { props.activity !== "" && props.link !== "" &&
            <p> You can find additional details here: <a href= {props.link}> {props.link} </a></p> }

         </div>
      )
   else 
         return (
         <p>We have no advice for you</p>);
}

export default DisplayActivity;