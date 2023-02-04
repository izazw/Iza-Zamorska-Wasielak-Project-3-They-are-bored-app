import { useState } from "react";

const Form = ({getActivity}) => {
   const [userChoice, setUserChoice] = useState("");

   const handleChange = (event) => {
      setUserChoice(event.target.value)
   };
     

   return (
      <div>
         <form 
         onSubmit={(event) => {
            event.preventDefault();
            getActivity(userChoice)
         }} 
         className="user-form" 
         name="user-selection">
            <fieldset>
               <legend>How many kids are feeling bored?</legend>
               
               <label htmlFor="one-kid">1</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="one-kid" 
                  value="1" 
                  onChange={handleChange}></input>
               
               <label htmlFor="two-kids">2 or more</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="two-kids" 
                  value="2"
                  onChange={handleChange}></input>
               
               {/* <label htmlFor="three-kids">3</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="three-kids" 
                  value="3"
                  onChange={handleChange}></input>
               
               <label htmlFor="four-kids">4</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="four-kids" 
                  value="4"
                  onChange={handleChange}>
               </input> */}
               <button type="submit"> Submit!</button>
            </fieldset>
         </form>
      </div>
   )
}

export default Form; 