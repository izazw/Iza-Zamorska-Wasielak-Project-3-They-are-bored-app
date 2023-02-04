import { useState } from "react";

const Form = ({getActivity}) => {
   
   const [userChoice, setUserChoice] = useState("1");
   const [newSearch, setNewSearch] = useState("Show me the activity");

   const handleChange = (event) => {
      setUserChoice(event.target.value);
      setNewSearch("Show me the activity")
   };
     

   return (
      <div>
         <form 
         onSubmit={(event) => {
            event.preventDefault();
            setNewSearch("Give me more of that")
            getActivity(userChoice)
            }
         } 
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
                  checked={userChoice === '1'}
                  onChange={handleChange}></input>
               
               <label htmlFor="two-kids">2 or more</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="two-kids" 
                  value="2"
                  checked={userChoice === '2'}
                  onChange={handleChange}></input>

               <button 
               type="submit"> {newSearch} </button>
            </fieldset>
         </form>
      </div>
   )
}

export default Form; 

//check if the userChoice has changed, if it has, name = Show me the activity, if it hasn't change Show me more!