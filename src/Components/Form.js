import { useState } from "react";

const Form = ({getActivity}) => {
   
   const [userNumberChoice, setUserNumberChoice] = useState("1");
   const [newSearch, setNewSearch] = useState("Show me the activity");

   const handleChange = (event) => {
      setUserNumberChoice(event.target.value);
      setNewSearch("Show me the activity")
   };
   

   return (
      <div>
         <form 
         onSubmit={(event) => {
            event.preventDefault();
            setNewSearch("Give me more of that")
            getActivity(userNumberChoice)
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
                  checked={userNumberChoice === '1'}
                  onChange={handleChange}></input>
               
               <label htmlFor="two-kids">2 or more</label>
               <input 
                  type="radio" 
                  name ="number-of-kids" 
                  id="two-kids" 
                  value="2"
                  checked={userNumberChoice === '2'}
                  onChange={handleChange}></input>
            </fieldset>
            <fieldset>
               <legend>What kind of activity do you think of?</legend>

               <label htmlFor="random">Doesn't matter to me</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="random" 
                  value="">
               </input>
               
               <label htmlFor="education">Education</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="education" 
                  value="education">
               </input>
               
               <label htmlFor="recreational">Recreational</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="recreational" 
                  value="recreational">
               </input>

               <label htmlFor="social">Social</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="social" 
                  value="social">
               </input>

               <label htmlFor="diy">DIY</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="diy" 
                  value="diy">
               </input>
               
               <label htmlFor="cooking">Cooking</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="cooking" 
                  value="cooking">
               </input>

               <label htmlFor="busywork">Chores to keep them busy</label>
               <input 
                  type="radio" 
                  name ="type-of-activity" 
                  id="busywork" 
                  value="busywork">
               </input>
               


            </fieldset>

            <button 
               type="submit"> {newSearch} </button>
         </form>
      </div>
   )
}

export default Form; 

//check if the userChoice has changed, if it has, name = Show me the activity, if it hasn't change Show me more!